package com.bandits.api.bandits_api.repositories;

import com.bandits.api.bandits_api.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    Recipe findByUri(String uri);
}
