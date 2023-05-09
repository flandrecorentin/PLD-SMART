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

@Document("Message")
public class Message {
//TODO : compléter la classe

    private String author;
    private String date;
    private String text;

    public Message(ObjectId author, String text, String date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }



    @Override
    public String toString() {
        return "Message{" +
                "author" + author + '\'' +
                ", date='" + date + '\'' +
                ", text='" + text + '\'' +
                '}';
    }

    public Date getDate() {
        return date;
    }

    public String getAuthor() {
        return author;
    }

    public String getText() {
        return text;
    }

}
