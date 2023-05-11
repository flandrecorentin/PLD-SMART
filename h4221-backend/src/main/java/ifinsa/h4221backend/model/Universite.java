package ifinsa.h4221backend.model;

import ch.qos.logback.core.encoder.EchoEncoder;
import org.json.simple.JSONArray;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Document("Universite")
public class Universite {
    @Id
    private String identifiant;
    private String nom;
    private String pays;
    private String ville;
    private String url;
    private String candidature;
    private String debutS1;
    private String finS1;
    private String debutS2;
    private String finS2;
    private JSONArray accords;

    public Universite() {
    }

    public Universite(String identifiant, String nom, String pays, String ville, String url, String candidature, String debutS1, String finS1, String debutS2, String finS2, JSONArray jsonArray) {
        this.identifiant = identifiant;
        this.nom = nom;
        this.pays = pays;
        this.ville = ville;
        this.url = url;
        this.candidature = candidature;
        this.debutS1 = debutS1;
        this.finS1 = finS1;
        this.debutS2 = debutS2;
        this.finS2 = finS2;
        this.accords = jsonArray;
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
                '}';
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getCandidature() {
        return candidature;
    }

    public void setCandidature(String candidature) {
        this.candidature = candidature;
    }

    public String getDebutS1() {
        return debutS1;
    }

    public void setDebutS1(String debutS1) {
        this.debutS1 = debutS1;
    }

    public String getFinS1() {
        return finS1;
    }

    public void setFinS1(String finS1) {
        this.finS1 = finS1;
    }

    public String getDebutS2() {
        return debutS2;
    }

    public void setDebutS2(String debutS2) {
        this.debutS2 = debutS2;
    }

    public String getFinS2() {
        return finS2;
    }

    public void setFinS2(String finS2) {
        this.finS2 = finS2;
    }

    public JSONArray getAccords() {
        return accords;
    }

    public void setAccords(JSONArray accords) {
        this.accords = accords;
    }
}
