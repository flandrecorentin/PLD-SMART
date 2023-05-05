package ifinsa.h4221backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Utilisateur")
public class User{

    @Id
    private String mail;
    private String name;
    private String password;

    public User() {
    }

    public User(String mail, String name, String password) {
        this.mail = mail;
        this.name = name;
        this.password = password;
    }
    public String getName() {
        return name;
    }

    public String getMail() {
        return mail;
    }

    public String getPassword() {
        return password;
    }
}