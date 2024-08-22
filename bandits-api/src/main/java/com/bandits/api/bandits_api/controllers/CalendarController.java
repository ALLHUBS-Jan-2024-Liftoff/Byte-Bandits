package com.bandits.api.bandits_api.controllers;

import com.bandits.api.bandits_api.models.Meal;
import com.bandits.api.bandits_api.models.data.CalendarDTO;
import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.repositories.MealRepository;

import com.bandits.api.bandits_api.repositories.UserRepository;
import com.bandits.api.bandits_api.security.JwtUtil;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/calendar")
@CrossOrigin(origins = "http://localhost:5173")
public class CalendarController {

    @Autowired
    private MealRepository mealRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    ModelMapper modelMapper = new ModelMapper();

    // Creates a TypeMap to map fields from Meal to a DTO for the calendar
    TypeMap<Meal, CalendarDTO> propertyMapper = this.modelMapper.createTypeMap(Meal.class, CalendarDTO.class);

    @GetMapping
    public ResponseEntity<List<CalendarDTO>> getScheduledMeals(@RequestHeader("Authorization") String authHeader) {
        // Extract the token from the Authorization header
        String token = authHeader.substring(7); // Remove "Bearer " from the token
        String username = jwtUtil.extractUsername(token); // Extract username from token

        // Fetch the user from the database
        User user = userRepository.findByUsername(username);

        if (user != null) {
            // Finds all meals associated with the user
            List<Meal> meals = mealRepository.findByUser(user);

            // Creates custom mapping to return an object with properties for the calendar
            propertyMapper.addMapping(Meal::getLabel, CalendarDTO::setTitle);
            propertyMapper.addMapping(Meal::getDate, CalendarDTO::setStart);
            propertyMapper.addMapping(Meal::getDate, CalendarDTO::setEnd);

            // Stream the collected meals to the DTO with custom mapping
            List<CalendarDTO> calendarDTO = meals.stream()
                    .map(meal -> modelMapper.map(meal, CalendarDTO.class))
                    .collect(Collectors.toList());

            System.out.println(calendarDTO);
            return ResponseEntity.ok(calendarDTO);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}

