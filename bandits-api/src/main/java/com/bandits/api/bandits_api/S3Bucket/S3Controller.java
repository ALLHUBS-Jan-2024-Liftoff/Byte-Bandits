package com.bandits.api.bandits_api.S3Bucket;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URL;
import java.util.Map;

@RestController
@RequestMapping("/")
@CrossOrigin
public class S3Controller {
    @GetMapping("/")
    String test(){
        return "TEST";
    }
    @PostMapping("/presignedurl")
    ResponseEntity<String> presignedUrl(@RequestBody Map<String, String> requestBody) {
        System.out.println("1" + requestBody);
        String type = requestBody.get("type");
        String name = requestBody.get("name");
        System.out.println("Received type: " + type);
        try {
            com.bandits.api.bandits_api.S3Bucket.S3Config s3 = new com.bandits.api.bandits_api.S3Bucket.S3Config();
            URL url = s3.generateSignedUrl(type,name);
            System.out.println(url);
            return ResponseEntity.ok(url.toString());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error getting the URL");
        }

    }
}