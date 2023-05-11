package ifinsa.h4221backend.model;

import org.json.simple.JSONObject;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("FormulaireREXTemp")
public class FormulaireREXTemp {

    @Id
    private String author;
    private JSONObject formulairetemp;

    public FormulaireREXTemp(JSONObject formulairetemp) {
        this.formulairetemp = formulairetemp;
    }

    public FormulaireREXTemp() {
    }

    public FormulaireREXTemp(String author, JSONObject formulairetemp) {
        this.author = author;
        this.formulairetemp = formulairetemp;
    }

    public String getAuthor() {
        return author;
    }

    public JSONObject getFormulairetemp() {
        return formulairetemp;
    }
}
