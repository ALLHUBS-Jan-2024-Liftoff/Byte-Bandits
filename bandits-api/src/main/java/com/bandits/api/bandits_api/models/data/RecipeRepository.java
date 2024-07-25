package com.bandits.api.bandits_api.models.data;

import com.bandits.api.bandits_api.models.Recipe;
import org.springframework.data.repository.CrudRepository;

public interface RecipeRepository extends CrudRepository<Recipe, Long> {
}
