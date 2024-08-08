package com.bandits.api.bandits_api.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class MealDay {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToMany
    private List<Meal> meals;

    @ManyToMany
    private List<MealPlan> mealPlans;

    private String date;

    public MealDay() {
    }

    public MealDay(Long id, User user, List<Meal> meals, List<MealPlan> mealPlans, String date) {
        this.id = id;
        this.user = user;
        this.meals = meals;
        this.mealPlans = mealPlans;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Meal> getMeals() {
        return meals;
    }

    public void setMeals(List<Meal> meals) {
        this.meals = meals;
    }

    public List<MealPlan> getMealPlans() {
        return mealPlans;
    }

    public void setMealPlans(List<MealPlan> mealPlans) {
        this.mealPlans = mealPlans;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

}
