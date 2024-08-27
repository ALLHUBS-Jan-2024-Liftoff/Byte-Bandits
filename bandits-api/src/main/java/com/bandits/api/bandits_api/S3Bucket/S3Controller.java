package com.bandits.api.bandits_api.S3Bucket;

import com.bandits.api.bandits_api.models.User;
import com.bandits.api.bandits_api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.net.URL;
import java.util.Map;

@RestController
@RequestMapping("/")
@CrossOrigin
public class S3Controller {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private S3Config s3Config;
    @GetMapping("/")
    String test(){
        return "TEST";
    }

    @PostMapping("/presignedurl")
    public ResponseEntity<String> generatePresignedUrl(@RequestBody Map<String, String> requestBody, Authentication authentication) {
        String username = authentication.getName(); // Get the current user's username

        String type = requestBody.get("type");
        try {
            String fileName = username + "/profile-picture.jpg"; // Define the file path in S3
            URL url = s3Config.generateSignedUrl(type, fileName); // Generate the pre-signed URL
            return ResponseEntity.ok(url.toString());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error generating the URL");
        }
    }

    }
    /*@PostMapping("/save-profile-picture")
    public ResponseEntity<String> saveProfilePicture(@RequestBody String profilePictureKey, Authentication authentication) {
        String username = authentication.getName();

        User user = userRepository.findByUsername(username);
        if (user != null) {
            user.setProfilePictureUrl(profilePictureKey);
            userRepository.save(user);
            return ResponseEntity.ok("Profile picture updated successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }
    }
*/

