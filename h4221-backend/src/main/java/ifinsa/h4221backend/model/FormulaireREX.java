package ifinsa.h4221backend.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.util.Pair;

import java.util.LinkedList;

@Document("Formulaire REX")
public class FormulaireREX {

    @Id
    private long id;
    private String author;
    private String date;
    private LinkedList<Pair<String,String>> information;

    public FormulaireREX() {
        information = initialisationInformation();
    }

    private static LinkedList<Pair<String, String>> initialisationInformation() {
        return null;
    }

    public FormulaireREX(LinkedList<Pair<String,String>> information) {
//        this.information = information;
    }

    public long getId() {
        return this.id;
    }

    @Autowired

    @Override
    public String toString() {
        return "FormulaireREX{" +
                "id=" + id +
                ", information=" + information +
                '}';
    }
}
