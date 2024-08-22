package com.bandits.api.bandits_api.service;

import com.bandits.api.bandits_api.models.Meal;
import com.bandits.api.bandits_api.models.Recipe;
import com.bandits.api.bandits_api.models.data.RecipeDTO;
import com.bandits.api.bandits_api.models.data.ReviewDTO;
import com.bandits.api.bandits_api.repositories.ReviewPlanRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReviewService {

    @Autowired
    private ReviewPlanRepository reviewPlanRepository;

    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    public List<ReviewDTO> getReviewByUserId(Integer userId) {
        LocalDate today = LocalDate.now();
        long startOfTodayEpochDay = today.toEpochDay();

        List<Meal> reviewMeals = reviewPlanRepository.findByRecipe_User_Id(userId);
        return  reviewMeals.stream()
                .filter(meal -> {
                    LocalDate mealDate = parseDate(meal.getDate());
                    return mealDate.toEpochDay() < startOfTodayEpochDay;
                })
                .toList()
                .stream()
                .map(this::covertToDTO)
                .collect(Collectors.toList());
    }

    private LocalDate parseDate(String date) {
        return LocalDate.parse(date, DATE_FORMATTER);
    }

    private ReviewDTO covertToDTO(Meal meal) {

        Recipe recipe = meal.getRecipe();
        RecipeDTO recipeDTO = new RecipeDTO(
            recipe.getId(),
            recipe.getUri(),
            recipe.getLabel(),
            recipe.getImage()

        );

        return new ReviewDTO(
                meal.getId(),
                recipeDTO,
                meal.getDate(),
                meal.getMealType(),
                meal.getRating(),
                meal.getReview()
        );
    }

    public Meal updateReviewMeal(Integer mealId, Integer rating, String review){
        Optional<Meal> optionalMealeal = reviewPlanRepository.findById(mealId);

        if(optionalMealeal.isPresent()){
            Meal existingMeal = optionalMealeal.get();
            existingMeal.setRating(rating);
            existingMeal.setReview(review);
            return reviewPlanRepository.save(existingMeal);
        }

        else {
            throw new EntityNotFoundException("Meal not found with ID: " + mealId);
        }
    }
}
