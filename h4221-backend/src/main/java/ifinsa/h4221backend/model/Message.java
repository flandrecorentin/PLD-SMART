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
    private String conversation;

    public Message(String author, String text, String date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    public Message() {
    }




    @Override
    public String toString() {
        return "Message{" +
                "author" + author + '\'' +
                ", date='" + date + '\'' +
                ", text='" + text + '\'' +
                '}';
    }

    public String getDate() {
        return date;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setConversation(String conversation) {
        this.conversation = conversation;
    }

    public String getAuthor() {
        return author;
    }

    public String getText() {
        return text;
    }

    public String getConversation() {
        return conversation;
    }
}
