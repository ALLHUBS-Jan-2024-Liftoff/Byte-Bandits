package com.bandits.api.bandits_api.model;

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

    @ManyToMany
    private List<MealDay> mealDays;

    private int numberOfDays;

    public MealPlan() {
    }

    public MealPlan(Long id, User user, List<MealDay> mealDays, int numberOfDays) {
        this.id = id;
        this.user = user;
        this.mealDays = mealDays;
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

    public List<MealDay> getMealDays() {
        return mealDays;
    }

    public void setMealDays(List<MealDay> mealDays) {
        this.mealDays = mealDays;
    }

    public int getNumberOfDays() {
        return numberOfDays;
    }

    public void setNumberOfDays(int numberOfDays) {
        this.numberOfDays = numberOfDays;
    }
}
