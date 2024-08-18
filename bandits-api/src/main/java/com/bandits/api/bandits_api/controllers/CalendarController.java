package com.bandits.api.bandits_api.controllers;

import com.bandits.api.bandits_api.models.Meal;
import com.bandits.api.bandits_api.models.Recipe;
import com.bandits.api.bandits_api.models.data.CalendarDTO;
import com.bandits.api.bandits_api.models.data.MealDTO;
import com.bandits.api.bandits_api.models.data.RecipeDTO;
import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.repositories.MealPlanRepository;
import com.bandits.api.bandits_api.repositories.MealRepository;
import com.bandits.api.bandits_api.repositories.RecipeRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/calendar")
@CrossOrigin(origins = "http://localhost:5173")
public class CalendarController {

    @Autowired
    private MealRepository mealRepository;

    @Autowired
    private UserController userController;

    ModelMapper modelMapper = new ModelMapper();

    // Creates a TypeMap to map fields from Meal to a DTO for the calendar
    TypeMap<Meal, CalendarDTO> propertyMapper = this.modelMapper.createTypeMap(Meal.class, CalendarDTO.class);

    @GetMapping
    public ResponseEntity<List<CalendarDTO>> getScheduledMeals(HttpSession session) {
        User user = userController.getUserFromSession(session);
        if (user != null) {
            // Finds all meals associated with the user
            List<Meal> meals = mealRepository.findByUser(user);
            // Creates custom mapping to return an object with props for calendar
            propertyMapper.addMapping(Meal::getLabel, CalendarDTO::setTitle);
            propertyMapper.addMapping(Meal::getDate, CalendarDTO::setStart);
            propertyMapper.addMapping(Meal::getDate, CalendarDTO::setEnd);
            // Stream the collected meals to the DTO with custom mapping
            List<CalendarDTO> calendarDTO = meals.stream()
                    .map(meal -> modelMapper.map(meal, CalendarDTO.class))
                    .collect(Collectors.toList());
//            }
            System.out.println(calendarDTO);
            return ResponseEntity.ok(calendarDTO);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
