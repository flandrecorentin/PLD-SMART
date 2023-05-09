package ifinsa.h4221backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

// annotation à mettre sur on veut persister la donnée/classe
@Document("exampleModel")
public class ExampleModel {

    // annotation pour transient
    @Transient
    private String file;
    @Id
    private String id;

    public ExampleModel() {
    }


    public ExampleModel(String test) {
        this.file = test;
    }
}
