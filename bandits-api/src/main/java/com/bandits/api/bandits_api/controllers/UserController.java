package com.bandits.api.bandits_api.controllers;

import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("signup")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // TODO Get mapping

    @PostMapping
    public ResponseEntity<User> addNewUser(@RequestBody User user) {
        User newUser = userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
}
