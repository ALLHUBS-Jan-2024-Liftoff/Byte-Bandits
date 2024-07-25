package com.bandits.api.bandits_api.controllers;

import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.models.data.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // TODO Get mapping

    // TODO Post mapping
}
