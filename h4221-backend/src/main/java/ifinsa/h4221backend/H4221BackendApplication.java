package ifinsa.h4221backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Component;

@SpringBootApplication
@EnableMongoRepositories
public class H4221BackendApplication {

    public static void main(String[] args) {
        System.out.println("||||| Beginning of the execution of the main class");
        SpringApplication.run(H4221BackendApplication.class, args);
        System.out.println("||||| End of the execution of the main class");
    }

}
