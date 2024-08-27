package com.bandits.api.bandits_api.S3Bucket;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.stereotype.Component;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;

import java.net.URL;
import java.time.Duration;
@Component
public class S3Config {
    private static final Dotenv dotenv = Dotenv.load();
    private static final String AWS_ACCESS_KEY = dotenv.get("AWS_ACCESS_KEY");
    private static final String AWS_SECRET_KEY = dotenv.get("AWS_SECRET_KEY");
    private static final String AWS_REGION = dotenv.get("AWS_REGION");
    private static final String AWS_BUCKET_NAME = dotenv.get("AWS_BUCKET_NAME");

    public URL generateSignedUrl(String type, String key) {
        String imageContent ="." + type.replace("image/", "");

        AwsBasicCredentials credentials = AwsBasicCredentials.create(AWS_ACCESS_KEY, AWS_SECRET_KEY);
        S3Client s3Client = S3Client.builder()
                .region(Region.of(AWS_REGION))
                .credentialsProvider(StaticCredentialsProvider.create(credentials))
                .build();

        PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                .bucket(AWS_BUCKET_NAME)
                .key(key + imageContent)
                .contentType(type)
                .build();

        S3Presigner presigner = S3Presigner.builder()
                .region(Region.of(AWS_REGION))
                .credentialsProvider(StaticCredentialsProvider.create(credentials))
                .build();


        PutObjectPresignRequest putObjectPresignRequest = PutObjectPresignRequest.builder()
                .signatureDuration(Duration.ofMinutes(5)) // Adjust the duration as needed
                .putObjectRequest(putObjectRequest)
                .build();

        URL presignedUrl = presigner.presignPutObject(putObjectPresignRequest).url();
        return presignedUrl;
    }
}
