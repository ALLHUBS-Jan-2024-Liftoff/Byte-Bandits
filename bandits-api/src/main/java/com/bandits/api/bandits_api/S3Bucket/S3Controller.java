package com.bandits.api.bandits_api.S3Bucket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;
import software.amazon.awssdk.core.sync.RequestBody;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/s3")
@CrossOrigin(origins = "http://localhost:5173")
public class S3Controller {

    private final S3Client s3Client;
    private final String bucketName;

    @Autowired
    public S3Controller(S3Client s3Client, S3Config s3Config) {
        this.s3Client = s3Client;
        this.bucketName = s3Config.getBucketName();
    }

    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> uploadFile(@RequestParam("file") MultipartFile file) {
        Map<String, String> response = new HashMap<>();

        try {
            String key = "uploads/" + file.getOriginalFilename();
            s3Client.putObject(PutObjectRequest.builder()
                            .bucket(bucketName)
                            .key(key)
                            .build(),
                    RequestBody.fromBytes(file.getBytes()));

            response.put("message", "File uploaded successfully");
            response.put("url", "https://" + bucketName + ".s3.amazonaws.com/" + key);
            return ResponseEntity.ok(response);

        } catch (S3Exception | IOException e) {
            response.put("message", "Failed to upload file: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
