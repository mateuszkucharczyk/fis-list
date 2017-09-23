package com.mateuszkucharczyk.fis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class FisApplication {
	public static void main(String[] args) {
		SpringApplication.run(FisApplication.class, args);
	}
}
