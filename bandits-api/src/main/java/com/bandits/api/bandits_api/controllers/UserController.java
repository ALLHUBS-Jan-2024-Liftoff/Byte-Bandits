package com.bandits.api.bandits_api.controllers;

import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    List<User> getAlUsers() {
        return (List<User>) userRepository.findAll();
    }

    @PostMapping
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }
}
