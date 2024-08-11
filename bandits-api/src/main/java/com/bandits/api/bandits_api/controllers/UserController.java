package com.bandits.api.bandits_api.controllers;

import com.bandits.api.bandits_api.models.data.LoginFormDTO;
import com.bandits.api.bandits_api.models.data.RegisterFormDTO;
import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.repositories.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    UserRepository userRepository;

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Long userId = (Long) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
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

        ResponseEntity response = null;
        Map<String, String> responseBody = new HashMap<>();
        User theUser = userRepository.findByUsername(loginFormDTO.getUsername());
        String password = loginFormDTO.getPassword();
        if (theUser == null) {
            responseBody.put("message", "Username does not exist");
            response = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(responseBody);
        } else if (!theUser.isMatchingPassword(password)) {
            System.out.println(password);
            responseBody.put("message", "Username or Password is Invalid!");
            response = ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(responseBody);
        } else {
            setUserInSession(request.getSession(), theUser);
            responseBody.put("message", "User successfully logged in.");
            responseBody.put("username", theUser.getUsername());
            responseBody.put("userRole", theUser.getRole());
            response = ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(responseBody);
        }
        return  response;
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().invalidate();
        return "redirect:/login";
    }
}
