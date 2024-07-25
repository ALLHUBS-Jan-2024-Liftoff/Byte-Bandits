package com.bandits.api.bandits_api.controller;

import com.bandits.api.bandits_api.model.User;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import com.bandits.api.bandits_api.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@RestController
public class UserController {
    @Autowired
    private UserService userService;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            userService.saveUser(user);
            return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error registering user", e);
            return new ResponseEntity<>("An error occurred while registering the user. Please try again.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}