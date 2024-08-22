package com.bandits.api.bandits_api;

import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.repositories.UserRepository;
import com.bandits.api.bandits_api.security.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class AuthenticationFilter implements HandlerInterceptor {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    private static final List<String> whitelist = Arrays.asList("/user/login", "/user/register", "/user/logout");

    private static boolean isWhitelisted(String path) {
        for (String pathRoot : whitelist) {
            if (path.startsWith(pathRoot)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response,
                             Object handler) throws IOException {

        // Don't require sign-in for whitelisted pages
        if (isWhitelisted(request.getRequestURI())) {
            return true; // Allow the request to proceed
        }

        // Extract the JWT token from the Authorization header
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7); // Remove "Bearer " from the token
            String username = jwtUtil.extractUsername(token);

            if (username != null) {
                User user = userRepository.findByUsername(username);

                if (user != null && jwtUtil.validateToken(token, user.getUsername())) {
                    return true; // Allow the request to proceed if the token is valid
                }
            }
        }

        // If the user is not authenticated or token is invalid, respond with an unauthorized status
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        return false; // Block the request
    }
}