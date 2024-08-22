package com.bandits.api.bandits_api.S3Bucket;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;

@Configuration
public class S3Config {

    private static final Dotenv dotenv = Dotenv.load();
    private static final String AWS_ACCESS_KEY = dotenv.get("AWS_ACCESS_KEY");
    private static final String AWS_SECRET_KEY = dotenv.get("AWS_SECRET_KEY");
    private static final String AWS_REGION = dotenv.get("AWS_REGION");
    private static final String AWS_BUCKET_NAME = dotenv.get("AWS_BUCKET_NAME");

    @Bean
    public S3Client s3Client() {
        AwsBasicCredentials credentials = AwsBasicCredentials.create(AWS_ACCESS_KEY, AWS_SECRET_KEY);
        return S3Client.builder()
                .region(Region.of(AWS_REGION))
                .credentialsProvider(StaticCredentialsProvider.create(credentials))
                .build();
    }

    @Bean
    public S3Presigner s3Presigner() {
        AwsBasicCredentials credentials = AwsBasicCredentials.create(AWS_ACCESS_KEY, AWS_SECRET_KEY);
        return S3Presigner.builder()
                .region(Region.of(AWS_REGION))
                .credentialsProvider(StaticCredentialsProvider.create(credentials))
                .build();
    }

    public String getBucketName() {
        return AWS_BUCKET_NAME;
    }
}