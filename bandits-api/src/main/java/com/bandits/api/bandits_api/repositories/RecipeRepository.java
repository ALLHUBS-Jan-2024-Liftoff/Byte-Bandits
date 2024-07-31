package com.bandits.api.bandits_api.repositories;

import com.bandits.api.bandits_api.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    Recipe findByUri(String uri);
}
