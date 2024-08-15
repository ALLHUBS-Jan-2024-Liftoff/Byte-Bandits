package com.bandits.api.bandits_api.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class MealPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    // TODO: create user end of relationship
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "mealPlan")
    private List<Meal> meals;

    private int numberOfDays;

    public MealPlan() {
    }

    public MealPlan(Long id, User user, List<Meal> meals, int numberOfDays) {
        this.id = id;
        this.user = user;
        this.meals = meals;
        this.numberOfDays = numberOfDays;
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

    public void setMealDays(List<Meal> mealDays) {
        this.meals = meals;
    }

    public int getNumberOfDays() {
        return numberOfDays;
    }

    public void setNumberOfDays(int numberOfDays) {
        this.numberOfDays = numberOfDays;
    }
}
