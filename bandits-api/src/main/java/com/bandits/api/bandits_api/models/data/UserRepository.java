package com.bandits.api.bandits_api.models.data;

import com.bandits.api.bandits_api.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
