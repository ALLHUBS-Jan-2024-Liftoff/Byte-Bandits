package com.bandits.api.bandits_api.controllers;

import com.bandits.api.bandits_api.models.Meal;
import com.bandits.api.bandits_api.models.data.MealDTO;
import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.repositories.MealRepository;
import com.bandits.api.bandits_api.repositories.RecipeRepository;
import com.bandits.api.bandits_api.repositories.UserRepository;
import com.bandits.api.bandits_api.security.JwtUtil;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/meals")
@CrossOrigin(origins = "http://localhost:5173")
public class MealController {

    @Autowired
    private MealRepository mealRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    ModelMapper modelMapper = new ModelMapper();

    @GetMapping("/saved")
    public ResponseEntity<List<MealDTO>> getSavedMeals(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7); // Remove "Bearer " from the token
        String username = jwtUtil.extractUsername(token); // Extract username from the token

        User user = userRepository.findByUsername(username);

        Integer userId = user.getId();

        if (user != null) {
            List<Meal> meals = mealRepository.findByRecipeUserId(userId);
            List<MealDTO> mealDTO = meals.stream()
                    .map(meal -> modelMapper.map(meal, MealDTO.class))
                    .collect(Collectors.toList());
            System.out.println(mealDTO);
            return ResponseEntity.ok(mealDTO);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PostMapping("/delete")
    public void deleteMeal(@RequestParam Integer mealId) {
        mealRepository.deleteById(mealId);
    }

    @PostMapping("/new")
    public ResponseEntity<Map<String, String>> saveNewRecipe(
            @RequestHeader("Authorization") String authHeader, @RequestParam String uri, @RequestParam String mealType, @RequestParam String date, @RequestParam String label) {
        String token = authHeader.substring(7); // Remove "Bearer " from the token
        String username = jwtUtil.extractUsername(token); // Extract username from the token

        User user = userRepository.findByUsername(username);
        Meal newMeal = new Meal();
        Map<String, String> responseBody = new HashMap<>();

        if (user != null) {
            newMeal.setRecipe(recipeRepository.findByUri(uri));
            newMeal.setLabel(label);
            newMeal.setMealType(mealType);
            newMeal.setDate(date);
            mealRepository.save(newMeal);
            responseBody.put("message", "Meal Saved Successfully!");
            return ResponseEntity.status(HttpStatus.CREATED).body(responseBody);
        } else {
            responseBody.put("message", "There was a problem saving the meal.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
        }
    }
}
