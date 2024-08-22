package com.bandits.api.bandits_api.S3Bucket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;
import software.amazon.awssdk.core.sync.RequestBody;

import java.io.IOException;
import java.net.URL;
import java.time.Duration;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/s3")
@CrossOrigin(origins = "http://localhost:5173")
public class S3Controller {

    private final S3Client s3Client;
    private final S3Presigner s3Presigner;
    private final String bucketName;
    private static final Logger logger = Logger.getLogger(S3Controller.class.getName());

    @Autowired
    public S3Controller(S3Client s3Client, S3Presigner s3Presigner, S3Config s3Config) {
        this.s3Client = s3Client;
        this.s3Presigner = s3Presigner;
        this.bucketName = s3Config.getBucketName();
    }

    // ENDPOINT: This should allow file uploads to S3Bucket
    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> uploadFile(@RequestParam("file") MultipartFile file) {
        Map<String, String> response = new HashMap<>();
        logger.info("Received file upload request: " + file.getOriginalFilename());

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
            logger.severe("Failed to upload file: " + e.getMessage());
            response.put("message", "Failed to upload file: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    // ENDPOINT: This should generate a presigned URL that the front end can use
    @PostMapping("/presignedurl")
    public ResponseEntity<Map<String, String>> generatePresignedUrl(@RequestParam("name") String name, @RequestParam("type") String type) {
        try {
            String key = "uploads/" + name;
            URL presignedUrl = createPresignedUrl(type, key);

            Map<String, String> response = new HashMap<>();
            response.put("url", presignedUrl.toString());

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.severe("Failed to generate presigned URL: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Helper method to generate the presigned URL using S3Presigner
    private URL createPresignedUrl(String type, String key) {
        PutObjectPresignRequest putObjectPresignRequest = PutObjectPresignRequest.builder()
                .signatureDuration(Duration.ofMinutes(5))
                .putObjectRequest(PutObjectRequest.builder()
                        .bucket(bucketName)
                        .key(key)
                        .contentType(type)
                        .build())
                .build();

        return s3Presigner.presignPutObject(putObjectPresignRequest).url();
    }
}
