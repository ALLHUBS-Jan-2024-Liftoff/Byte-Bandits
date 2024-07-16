package com.bandits.api.bandits_api.models.data;

import com.bandits.api.bandits_api.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
