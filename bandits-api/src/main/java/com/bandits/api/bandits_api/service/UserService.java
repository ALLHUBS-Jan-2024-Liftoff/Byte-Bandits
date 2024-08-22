package com.bandits.api.bandits_api.service;

import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.models.data.UpdatePasswordDTO;
import com.bandits.api.bandits_api.repositories.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.s3.endpoints.internal.Value;

import java.util.Map;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void updatePassword(String userName, UpdatePasswordDTO updatePass){

        Optional<User> optUser = Optional.ofNullable(userRepository.findByUsername(userName));
        User user = optUser.orElseThrow(()->new RuntimeException("User not found"));

        String currentPassword = updatePass.getCurrentPassword();
        String newPassword = passwordEncoder.encode(updatePass.getNewPassword());

        if(!passwordEncoder.matches(currentPassword, user.getPwHash())) {
            throw new RuntimeException("Current password is incorrect");
        }

        user.setPwHash(newPassword);
        userRepository.save(user);
    }
}
