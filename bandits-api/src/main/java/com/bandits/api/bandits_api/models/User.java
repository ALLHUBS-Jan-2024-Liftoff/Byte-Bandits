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
    private String role;

    @OneToMany(mappedBy = "user")
    private List<Recipe> recipes;

    @OneToMany(mappedBy = "user")
    private List<Meal> meals;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    // Default constructor
    public User() {
    }

    // Constructor for user registration
    public User(String username, String password, String firstName, String lastName, String email, String role) {
        this.username = username;
        this.pwHash = encoder.encode(password);  // Hash the password before storing
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
    }

    // Overloaded constructor with additional parameters
    public User(String username, String password, String firstName, String lastName, String email, String role, List<Recipe> recipes, List<Meal> meals) {
        this.username = username;
        this.pwHash = encoder.encode(password);  // Hash the password before storing
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
        this.recipes = recipes;
        this.meals = meals;
    }

    // Method to check if a provided password matches the stored password hash
    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

    // Getters and setters for all fields
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
}