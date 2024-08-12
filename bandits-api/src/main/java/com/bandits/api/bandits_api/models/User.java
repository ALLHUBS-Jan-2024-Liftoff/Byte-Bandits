package com.bandits.api.bandits_api.models;

import jakarta.persistence.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String pwHash;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String address;
    private String role;

    @OneToMany(mappedBy = "user")
    private List<Recipe> recipes;

    @OneToMany(mappedBy = "user")
    private List<Meal> meals;

    @OneToMany(mappedBy = "user")
    private List<MealPlan> mealPlans;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User() {
    }

//    getUsername(), getPassword(), getFirstName(), getLastName().getEmail(), getPhoneNumber(), getAddress(),"basic");


    public User(String username, String password, String firstName, String lastName, String email, String phoneNumber, String address, String role) {
        this.username = username;
        this.pwHash = encoder.encode(password);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.role = role;
    }

    public User(String username, String password, String firstName, String lastName, String email, String phoneNumber, String address, String role, List<Recipe> recipes, List<Meal> meals, List<MealPlan> mealPlans) {
        this.username = username;
        this.pwHash = encoder.encode(password);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.role = role;
        this.recipes = recipes;
        this.meals = meals;
        this.mealPlans = mealPlans;
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPwHash() {
        return pwHash;
    }

    public void setPwHash(String pwHash) {
        this.pwHash = pwHash;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Recipe> getRecipes() {
        return recipes;
    }

    public void setRecipes(List<Recipe> recipes) {
        this.recipes = recipes;
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
}
