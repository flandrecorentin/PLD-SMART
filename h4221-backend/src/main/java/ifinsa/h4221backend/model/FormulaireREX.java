package ifinsa.h4221backend.model;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.util.Pair;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;

@Document("FormulaireREX")
public class FormulaireREX {


    public int getId() {
        return id;
    }

    @Id
    @Transient
    private int id;
    private String author;
    private String date;
    private Map<String, String> information;

    public FormulaireREX() {

    }



    @Override
    public String toString() {
        return "FormulaireREX{" +
                "author='" + author + '\'' +
                ", date='" + date + '\'' +
                ", information=" + information +
                '}';
    }

    public String getAuthor() {
        return author;
    }

    public String getDate() {
        return date;
    }

    public void setInformation(Map<String, String> information) {
        this.information = information;
    }
}
