package com.bandits.api.bandits_api.repository;

import com.bandits.api.bandits_api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepository  extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
