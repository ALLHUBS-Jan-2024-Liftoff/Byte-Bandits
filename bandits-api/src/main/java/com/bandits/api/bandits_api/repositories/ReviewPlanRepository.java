package com.bandits.api.bandits_api.repositories;

import com.bandits.api.bandits_api.models.Meal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewPlanRepository extends JpaRepository<Meal, Integer> {
    List<Meal> findByRecipe_User_Id(Integer userId);
}
