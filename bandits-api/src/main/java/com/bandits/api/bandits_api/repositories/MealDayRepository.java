package com.bandits.api.bandits_api.repositories;

import com.bandits.api.bandits_api.model.MealDay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealDayRepository extends JpaRepository<MealDay, Long> {
}
