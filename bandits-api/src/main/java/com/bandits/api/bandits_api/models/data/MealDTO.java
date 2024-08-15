package com.bandits.api.bandits_api.models.data;

import com.bandits.api.bandits_api.models.MealPlan;
import com.bandits.api.bandits_api.models.Recipe;
import com.bandits.api.bandits_api.models.User;

public class MealDTO {

    private Integer id;

    private Recipe recipe;

    private User user;

    private MealPlan mealPlan;

    private String mealType;

    private String date;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public MealPlan getMealPlan() {
        return mealPlan;
    }

    public void setMealPlan(MealPlan mealPlan) {
        this.mealPlan = mealPlan;
    }

    public String getMealType() {
        return mealType;
    }

    public void setMealType(String mealType) {
        this.mealType = mealType;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
