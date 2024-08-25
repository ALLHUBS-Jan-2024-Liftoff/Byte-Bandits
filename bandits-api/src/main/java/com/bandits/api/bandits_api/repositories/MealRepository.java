package com.bandits.api.bandits_api.repositories;

import com.bandits.api.bandits_api.models.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealRepository extends JpaRepository<Meal, Integer> {

    List<Meal> findByRecipeUserId(final Integer id);

}
