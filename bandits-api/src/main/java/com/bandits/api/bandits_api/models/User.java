package com.bandits.api.bandits_api.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import java.util.List;
import java.util.Objects;

@Entity
public class User extends AbstractEntity {

    @NotBlank
    @Size(max = 50, message = "This field cannot exceed 50 characters.")
    private String firstName;

    @NotBlank
    @Size(max = 50, message = "This field cannot exceed 50 characters.")
    private String lastName;

    private Integer age;

    @NotBlank
    @Size(max = 30, message = "This field cannot exceed 30 characters.")
    private String username;

    // Case-insensitive, but requires '.' and '@'
    @NotBlank
    @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}",
            flags = Pattern.Flag.CASE_INSENSITIVE)
    private String email;

    @ManyToMany
    private List<Recipe> recipes;

    // TODO Authentication

    // TODO S3 integration


    public User() {
    }

    public User(String firstName, String lastName, String username, String email, Integer age, List<Recipe> recipes) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.age = age;
        this.recipes = recipes;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public List<Recipe> getRecipes() {
        return recipes;
    }

    public void setRecipes(List<Recipe> recipes) {
        this.recipes = recipes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User user)) return false;
        if (!super.equals(o)) return false;
        return Objects.equals(username, user.username) || Objects.equals(email, user.email);
    }

}
