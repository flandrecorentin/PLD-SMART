package ifinsa.h4221backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Pays")
public class Pays {

    @Id
    private String identifiant;

    public Pays() {
    }

    public Pays(String identifiant) {
        this.identifiant = identifiant;
    }

    public String getIdentifiant() {
        return identifiant;
    }

    public void setIdentifiant(String identifiant) {
        this.identifiant = identifiant;
    }
}
