package com.bandits.api.bandits_api.controllers;


import com.bandits.api.bandits_api.models.Meal;
import com.bandits.api.bandits_api.models.Recipe;
import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.models.data.RecipeDTO;
import com.bandits.api.bandits_api.models.data.ReviewDTO;
import com.bandits.api.bandits_api.models.data.UpdateRatingDTO;
import com.bandits.api.bandits_api.repositories.UserRepository;
import com.bandits.api.bandits_api.security.JwtUtil;
import com.bandits.api.bandits_api.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/review")
public class ReviewPlanController {

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private JwtUtil jwtUtil;


    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public ResponseEntity<List<ReviewDTO>> getReviewMeals(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7); // Remove "Bearer " from the token
        String username = jwtUtil.extractUsername(token); // Extract username from the token

        User user = userRepository.findByUsername(username);
        Long userId = user.getId();
        List<ReviewDTO> reviewMeals = reviewService.getReviewByUserId(userId);
        return ResponseEntity.ok(reviewMeals);
    }

    @PutMapping("/update")
    public ResponseEntity<ReviewDTO> updateRating(
            @RequestParam Integer mealId,
            @RequestBody UpdateRatingDTO updateRatingDTO){

        Meal updateMeal = reviewService.updateReviewMeal(mealId,updateRatingDTO.getRating(),updateRatingDTO.getReview());

        Recipe recipe = updateMeal.getRecipe();
        RecipeDTO recipeDTO = new RecipeDTO(
                recipe.getId(),
                recipe.getUri(),
                recipe.getLabel(),
                recipe.getImage()
        );

        ReviewDTO reviewDTO = new ReviewDTO(
                updateMeal.getId(),
                recipeDTO,
                updateMeal.getDate(),
                updateMeal.getMealType(),
                updateMeal.getRating(),
                updateMeal.getReview()
        );

        return ResponseEntity.ok(reviewDTO);
    }
}
