package ifinsa.h4221backend.model;

import ch.qos.logback.core.encoder.EchoEncoder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Document("Universite")
public class Universite {
    @Id
    private String identifiant;
    private String nom;
    private String pays;
    private Map<String, String> information;

    public Universite() {
    }

    public Universite(String identifiant, String nom, String pays) {
        this.identifiant = identifiant;
        this.nom = nom;
        this.pays = pays;
    }

    public boolean ajouterInformations(String info, String value){
        try{
            this.information.put(info, value);
            return true;
        }catch (Exception exception){
            return false;
        }
    }

    public String getIdentifiant() {
        return identifiant;
    }

    public void setIdentifiant(String identifiant) {
        this.identifiant = identifiant;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    @Override
    public String toString() {
        return "Universite{" +
                "identifiant='" + identifiant + '\'' +
                ", nom='" + nom + '\'' +
                ", pays='" + pays + '\'' +
                ", information=" + information +
                '}';
    }
}
