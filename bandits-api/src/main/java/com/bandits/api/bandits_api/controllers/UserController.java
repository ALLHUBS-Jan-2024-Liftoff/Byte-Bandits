package com.bandits.api.bandits_api.controllers;

import com.bandits.api.bandits_api.models.data.LoginFormDTO;
import com.bandits.api.bandits_api.models.data.RegisterFormDTO;
import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.models.data.UpdatePasswordDTO;
import com.bandits.api.bandits_api.repositories.UserRepository;
import com.bandits.api.bandits_api.security.JwtUtil;

import com.bandits.api.bandits_api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.bandits.api.bandits_api.models.data.UserDTO;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

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

    @Autowired
    private UserService userService;

    private static final Logger logger = Logger.getLogger(UserController.class.getName());

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

    // Current Endpoint - AccountPage.jsx useEffect fetchUserData -L.A
    @GetMapping("/current")
    public ResponseEntity<UserDTO> getCurrentUser(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            logger.warning("Authentication is null or not authenticated");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        org.springframework.security.core.userdetails.User userDetails =
                (org.springframework.security.core.userdetails.User) authentication.getPrincipal();


        User user = userRepository.findByUsername(userDetails.getUsername());
        if (user == null) {
            logger.warning("No user found in authentication principal");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        // Convert User to UserDTO
        UserDTO userDTO = new UserDTO(user.getId(), user.getUsername(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getProfilePictureUrl());

        logger.info("Current user: " + userDTO.getUsername());
        return ResponseEntity.ok(userDTO);
    }

    @PutMapping("/update-password/{username}")
    public ResponseEntity<?> updatePassword(@PathVariable String username, @RequestBody UpdatePasswordDTO updatePasswordDTO) {
        System.out.println("Received update password request for username: " + username);
        System.out.println("Current Password: " + updatePasswordDTO.getCurrentPassword());
        System.out.println("New Password: " + updatePasswordDTO.getNewPassword());

        try {
            userService.updatePassword(username, updatePasswordDTO);
            return ResponseEntity.ok("Password successfully updated");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }


    @PutMapping("/update")
    public ResponseEntity<UserDTO> updateUser(@RequestBody UserDTO userDTO, Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        // Get the authenticated user's username
        org.springframework.security.core.userdetails.User userDetails =
                (org.springframework.security.core.userdetails.User) authentication.getPrincipal();

        // Find the user in the database
        User user = userRepository.findByUsername(userDetails.getUsername());
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        // Update the user's information
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());

        // Save the updated user information
        userRepository.save(user);

        // Convert the updated User entity back to a UserDTO
        UserDTO updatedUserDTO = new UserDTO(user.getId(), user.getUsername(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getProfilePictureUrl());

        return ResponseEntity.ok(updatedUserDTO);
    }


    @GetMapping("/logout")
    public ResponseEntity<String> logout() {
        // The client should simply discard the token.
        return ResponseEntity.ok("User successfully logged out. Please discard the token on the client side.");
    }

    @GetMapping("/profile")
    public ResponseEntity<UserDTO> getProfile(Authentication authentication) {
        String username = authentication.getName();
        User user = userRepository.findByUsername(username);

        if (user != null) {
            // Construct the URL dynamically
            String profilePictureUrl = "https://test-presign-tutorial.s3.amazonaws.com/" + username + ".jpg";


            // String profilePictureUrl = s3Config.generatePresignedUrl(username + "/profile-picture.jpg");

            UserDTO userDTO = new UserDTO(
                    user.getId(),
                    user.getUsername(),
                    user.getFirstName(),
                    user.getLastName(),
                    user.getEmail(),
                    profilePictureUrl  // Generate URL dynamically
            );
            return ResponseEntity.ok(userDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}