package com.bandits.api.bandits_api.repositories;

import com.bandits.api.bandits_api.models.MealPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealPlanRepository extends JpaRepository<MealPlan, Integer> {
}
