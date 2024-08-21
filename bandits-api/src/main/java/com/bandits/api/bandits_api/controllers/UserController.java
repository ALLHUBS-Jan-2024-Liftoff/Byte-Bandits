package com.bandits.api.bandits_api.controllers;

import com.bandits.api.bandits_api.models.data.LoginFormDTO;
import com.bandits.api.bandits_api.models.data.RegisterFormDTO;
import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.repositories.UserRepository;
import com.bandits.api.bandits_api.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping(value = "/register")
    public ResponseEntity<Map<String, String>> processRegistrationForm(@RequestBody RegisterFormDTO registerFormDTO) {
        Map<String, String> responseBody = new HashMap<>();
        try {
            User existingUser = userRepository.findByUsername(registerFormDTO.getUsername());
            if (existingUser == null && !registerFormDTO.getUsername().isEmpty() && !registerFormDTO.getPassword().isEmpty()) {
                User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getPassword(), registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(), "basic");
                userRepository.save(newUser);
                responseBody.put("message", "Registration Successful!");
                return ResponseEntity.status(HttpStatus.CREATED).body(responseBody);
            } else if (existingUser != null) {
                responseBody.put("message", "User Already Exists!");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
            } else if (registerFormDTO.getUsername().isEmpty()) {
                responseBody.put("message", "Username is Required!");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
            } else if (registerFormDTO.getPassword().isEmpty()) {
                responseBody.put("message", "Password Required!");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
            }
        } catch (Exception ex) {
            responseBody.put("message", "An exception occurred due to " + ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody); // Fallback in case of an unknown issue
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> processLoginForm(@RequestBody LoginFormDTO loginFormDTO) {
        Map<String, String> responseBody = new HashMap<>();
        try {
            // Authenticate the user
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginFormDTO.getUsername(), loginFormDTO.getPassword())
            );

            // Generate the JWT token
            String token = jwtUtil.generateToken(loginFormDTO.getUsername());

            // Prepare the response
            responseBody.put("message", "User successfully logged in.");
            responseBody.put("token", token);
            return ResponseEntity.ok(responseBody);

        } catch (AuthenticationException e) {
            responseBody.put("message", "Username or Password is Invalid!");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(responseBody);
        }
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout() {
        // Since we're using JWTs, the "logout" process is stateless.
        // The client should simply discard the token.
        return ResponseEntity.ok("User successfully logged out. Please discard the token on the client side.");
    }
}