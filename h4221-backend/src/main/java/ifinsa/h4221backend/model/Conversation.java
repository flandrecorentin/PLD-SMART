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

@Document("Conversation")
public class Conversation {

    private String name;
    private ObjectId creator;
    private Date creationDate;
    private ObjectId university;
    private String scale;
    private bool closed;
    private int nombreDeMessages;
    private list<Message> messagelist;

    public Conversation(String name, String creator, String university, String scale) {
        this.name = name;
        this.creator = creator;
        this.university = university;
        this.scale = scale;
        this.closed = false;
        this.creationDate = SystemClockFactory.getDatetime();
        this.nombreDeMessages = 0;
    }

    @Override
    public String toString() {
        return "Conversation{" +
                "creator='" + creator + '\'' +
                ", name='" + name + '\'' +
                ", creationDate='" + creationDate + '\'' +
                ", university=" + university +
                ", scale='" + scale + '\'' +
                ", closed'" + closed + '\'' +
                '}';
    }

    public String getCreator() {
        return creator;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public String getUniversity() {
        return university;
    }

    public String getExchangeUniversity() {
        return exchangeUniversity;
    }

    public String getClosed() {
        return closed;
    }

    public String getScale() { return scale;}

    public void close() {
        closed = true;
    }

    public void posterMessage(Message message) {
        this.messagelist.add(nombreDeMessages,message)
    }

}
