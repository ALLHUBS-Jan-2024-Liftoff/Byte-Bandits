package com.bandits.api.bandits_api.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    @ManyToMany
    private List<MealDay> mealDays;

    private int rating;



    public Meal() {
    }

    public Meal(Long id, Recipe recipe, int rating) {
        this.id = id;
        this.recipe = recipe;
        this.rating = rating;
    }

    public Long getId() {
        return id;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
