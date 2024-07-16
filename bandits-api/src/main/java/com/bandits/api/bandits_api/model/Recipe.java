package com.bandits.api.bandits_api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Recipe {

    private @Id
    @GeneratedValue Long id;
    private String name;


    public Recipe(){}

    public Recipe(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof Recipe))
            return false;
        Recipe recipe = (Recipe) o;
        return Objects.equals(this.id, recipe.id) && Objects.equals(this.name, recipe.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name);
    }
}
