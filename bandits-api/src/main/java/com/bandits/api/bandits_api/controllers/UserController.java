package com.bandits.api.bandits_api.controllers;

import com.bandits.api.bandits_api.models.data.LoginFormDTO;
import com.bandits.api.bandits_api.models.data.RegisterFormDTO;
import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.repositories.UserRepository;
import com.bandits.api.bandits_api.services.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;




@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Long userId = (Long) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        return user.orElse(null);

    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }

    @PostMapping(value= "/register" )
    public ResponseEntity<Map> processRegistrationForm(@RequestBody RegisterFormDTO registerFormDTO,
                                                       HttpServletRequest request)  {
        ResponseEntity response = null;
        Map<String, String> responseBody = new HashMap<>();
        try{
            User existingUser = userRepository.findByUsername(registerFormDTO.getUsername());
            if (existingUser == null && !registerFormDTO.getUsername().isEmpty() && !registerFormDTO.getPassword().isEmpty()){
                responseBody.put("message", "Registration Successful!");
                response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(responseBody);
                User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getPassword(), registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(), registerFormDTO.getPhoneNumber(), registerFormDTO.getAddress(),"basic");
                setUserInSession(request.getSession(), newUser);
                userRepository.save(newUser);
            } else if(existingUser != null) {
                responseBody.put("message", "User Already Exists!");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            } else if(registerFormDTO.getUsername().isEmpty()) {
                responseBody.put("message", "Username is Required!");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            } else if (registerFormDTO.getPassword().isEmpty()) {
                responseBody.put("message", "Password Required!");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            }
        } catch (Exception ex) {
            responseBody.put("message", "An exception occurred due to " + ex.getMessage());
            response = ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(responseBody);
        }
        return response;
    }

    @PostMapping("/login")
    public ResponseEntity<Map> processLoginForm(@RequestBody LoginFormDTO loginFormDTO, HttpServletRequest request) {

        // Will hold message, username, token, and role
        Map<String, String> responseBody = new HashMap<>();

        // Retrieve username and password from user attempting to log in
        User currentUser = userRepository.findByUsername(loginFormDTO.getUsername());
        String password = loginFormDTO.getPassword();

        // Validate username and password, throw error if either is not found
        if (currentUser == null) {
            ResponseEntity<Map> response = null;
            responseBody.put("message", "Username or Password is Invalid!");
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(responseBody);
        } else if (!currentUser.isMatchingPassword(password)) {
//            // For dev/testing only
//            System.out.println(password);
            responseBody.put("message", "Username or Password is Invalid!");
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(responseBody);
        // Username and password were found, create a session for user, return token and role to the frontend
        } else {
            setUserInSession(request.getSession(), currentUser);

            // Generate token for authentication
            String token = jwtService.generateToken(currentUser);

            // Return confirmation message to user, along with their username and token
            responseBody.put("message", "User successfully logged in.");
            responseBody.put("username", currentUser.getUsername());
            responseBody.put("userRole", currentUser.getRole());
            responseBody.put("token", token);

            return ResponseEntity.ok(responseBody);
        }
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().invalidate();
        return "redirect:/login";
    }
}
