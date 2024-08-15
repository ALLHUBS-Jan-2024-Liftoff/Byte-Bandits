package com.bandits.api.bandits_api.repositories;

import com.bandits.api.bandits_api.models.Recipe;
import com.bandits.api.bandits_api.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

    Recipe findByUri(String uri);

    List<Recipe> findByUser(User user);

}

