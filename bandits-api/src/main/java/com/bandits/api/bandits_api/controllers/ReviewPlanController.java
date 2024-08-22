package com.bandits.api.bandits_api.controllers;


import com.bandits.api.bandits_api.models.Meal;
import com.bandits.api.bandits_api.models.Recipe;
import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.models.data.RecipeDTO;
import com.bandits.api.bandits_api.models.data.ReviewDTO;
import com.bandits.api.bandits_api.models.data.UpdatePasswordDTO;
import com.bandits.api.bandits_api.models.data.UpdateRatingDTO;
import com.bandits.api.bandits_api.repositories.UserRepository;
import com.bandits.api.bandits_api.security.JwtUtil;
import com.bandits.api.bandits_api.service.ReviewService;
import com.bandits.api.bandits_api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/review")
public class ReviewPlanController {

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<List<ReviewDTO>> getReviewMeals(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7); // Remove "Bearer " from the token
        String username = jwtUtil.extractUsername(token); // Extract username from the token

        User user = userRepository.findByUsername(username);
        Integer userId = user.getId();
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

    @PutMapping("/update-password")
    public ResponseEntity<String> updatePassword(@RequestHeader("Authorization") String authHeader,
                                                 @RequestBody UpdatePasswordDTO updatePass) {

        String token = authHeader.substring(7);
        String username = jwtUtil.extractUsername(token);
        User user = userRepository.findByUsername(username);


        userService.updatePassword(user.getUsername(),updatePass);

        return ResponseEntity.ok("Password updated successfully");
    }


    @PutMapping("/updateA")
    public ResponseEntity<String> updateRatingA(
            @RequestBody UpdatePasswordDTO updatePass){

        return ResponseEntity.ok(updatePass.getNewPassword());
    }
}
