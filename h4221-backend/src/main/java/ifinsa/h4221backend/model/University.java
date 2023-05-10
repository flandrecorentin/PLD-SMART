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

@Document("University")
public class University {
//TODO : compléter la classe
    private String city;

    public University() {

    }



    @Override
    public String toString() {
        return "University{" +
                "city'" + city + '\'' +
                '}';
    }

    public String getCity() {
        return city;
    }

}
