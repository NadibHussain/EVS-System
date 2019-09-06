package com.election.management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.election.management.utility.StorageProperties;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class ElectionManagementSystemApplication {

    public static void main(String[] args) {

        SpringApplication.run(ElectionManagementSystemApplication.class, args);
    }

}

