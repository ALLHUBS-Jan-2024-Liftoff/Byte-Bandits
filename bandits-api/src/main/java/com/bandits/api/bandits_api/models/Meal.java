package com.bandits.api.bandits_api.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String label;

    private String mealType;

    private String date;

    private Integer rating;

    private String review;

    public Meal() {
    }

    public Meal(Recipe recipe, User user, String label, String mealType, String date, Integer rating, String review) {
        this.recipe = recipe;
        this.user = user;
        this.label = label;
        this.mealType = mealType;
        this.date = date;
        this.rating = rating;
        this.review = review;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public Integer getId() {
        return id;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getMealType() {
        return mealType;
    }

    public void setMealType(String mealType) {
        this.mealType = mealType;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


}
