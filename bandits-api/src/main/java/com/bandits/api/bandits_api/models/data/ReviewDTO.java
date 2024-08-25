package com.bandits.api.bandits_api.models.data;

public class ReviewDTO {
    private Integer id;
    private RecipeDTO recipe;
    private String date;
    private String mealType;
    private Integer rating;
    private String review;


    public ReviewDTO() {
    }

    public ReviewDTO(Integer id, RecipeDTO recipe, String date, String mealType, Integer rating, String review) {
        this.id = id;
        this.recipe = recipe;
        this.date = date;
        this.mealType = mealType;
        this.rating = rating;
        this.review = review;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public RecipeDTO getRecipe() {
        return recipe;
    }

    public void setRecipe(RecipeDTO recipe) {
        this.recipe = recipe;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getMealType() {
        return mealType;
    }

    public void setMealType(String mealType) {
        this.mealType = mealType;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
