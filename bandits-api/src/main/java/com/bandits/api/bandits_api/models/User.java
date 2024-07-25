package com.bandits.api.bandits_api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
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

    @NotBlank
    @Size(max = 30, message = "This field cannot exceed 30 characters.")
    private String username;

    // Case-insensitive, but requires '.' and '@'
    @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}",
            flags = Pattern.Flag.CASE_INSENSITIVE)
    private String email;

    @ManyToMany
    private List<Recipe> recipes;

    // TODO Authentication

    // TODO S3 integration


    public User() {
    }

    public User(String firstName, String lastName, String username, String email, List<Recipe> recipes) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.recipes = recipes;
    }

    public @NotBlank @Size(max = 50, message = "This field cannot exceed 50 characters.") String getFirstName() {
        return firstName;
    }

    public void setFirstName(@NotBlank @Size(max = 50, message = "This field cannot exceed 50 characters.") String firstName) {
        this.firstName = firstName;
    }

    public @NotBlank @Size(max = 50, message = "This field cannot exceed 50 characters.") String getLastName() {
        return lastName;
    }

    public void setLastName(@NotBlank @Size(max = 50, message = "This field cannot exceed 50 characters.") String lastName) {
        this.lastName = lastName;
    }

    public @NotBlank @Size(max = 30, message = "This field cannot exceed 30 characters.") String getUsername() {
        return username;
    }

    public void setUsername(@NotBlank @Size(max = 30, message = "This field cannot exceed 30 characters.") String username) {
        this.username = username;
    }

    public @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}",
            flags = Pattern.Flag.CASE_INSENSITIVE) String getEmail() {
        return email;
    }

    public void setEmail(@Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}",
            flags = Pattern.Flag.CASE_INSENSITIVE) String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User user)) return false;
        if (!super.equals(o)) return false;
        return Objects.equals(username, user.username) || Objects.equals(email, user.email);
    }

}
