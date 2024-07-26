package com.bandits.api.bandits_api.models.data;

import com.bandits.api.bandits_api.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
}
