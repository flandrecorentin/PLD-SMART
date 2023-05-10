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

    private String author;
    private String date;
    private Map<String, String> information;
    private String exchangeCountry;
    private String exchangeUniversity;

    public FormulaireREX() {

    }



    @Override
    public String toString() {
        return "FormulaireREX{" +
                "author='" + author + '\'' +
                ", date='" + date + '\'' +
                ", ExchangeCountry='" + exchangeCountry + '\'' +
                ", ExchangeUniversity='" + exchangeUniversity + '\'' +
                ", information=" + information +
                '}';
    }

    public String getAuthor() {
        return author;
    }

    public String getDate() {
        return date;
    }

    public String getExchangeCountry() {
        return exchangeCountry;
    }

    public String getExchangeUniversity() {
        return exchangeUniversity;
    }

    public void setInformation(Map<String, String> information) {
        this.information = information;
        this.exchangeCountry = this.information.get("ExchangeCountry");
        this.exchangeUniversity = this.information.get("ExchangeUniversity");
    }
}
