package com.bandits.api.bandits_api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.validation.constraints.NotBlank;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Recipe extends AbstractEntity {

    @NotBlank
    private String uri;

    private String label;

    @ManyToMany(mappedBy = "recipes")
    private final List<User> users = new ArrayList<>();

    public Recipe() {}

    public Recipe(String uri, String label) {
        this.uri = uri;
        this.label = label;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public List<User> getUsers() {
        return users;
    }

    // TODO Implement tags

    // TODO Implement reviews

    // TODO implement ratings



}
