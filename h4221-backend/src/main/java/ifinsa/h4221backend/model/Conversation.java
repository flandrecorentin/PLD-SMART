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
import java.util.LinkedList;
import java.util.List;
import org.bson.types.ObjectId;

@Document("Conversation")
public class Conversation {

    @Id
    private ObjectId id;

    private String name;
    private String creator;
    private String creationDate;
    private String university;
    private String scale;
    private boolean closed;
    private int nombreDeMessages;
    private List<Message> messageList;

    public Conversation(String name, String creator, String creationDate, String university, String scale) {
        this.name = name;
        this.creator = creator;
        this.creationDate = creationDate;
        this.university = university;
        this.scale = scale;
        this.closed = false;
        this.nombreDeMessages = 0;
        this.messageList = new LinkedList<>();
    }

    public Conversation() {
        this.closed = false;
        this.nombreDeMessages = 0;
        this.messageList = new LinkedList<>();
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

    public String getName() {
        return name;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public String getUniversity() {
        return university;
    }

    public boolean getClosed() {
        return closed;
    }

    public String getScale() { return scale;}

    public void close() {
        closed = true;
    }

    public void posterMessage(Message message) {
        this.messageList.add(0,message);
        nombreDeMessages++;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }
    public void setCreator(String creator) {
        this.creator = creator;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setUniversity(String university) {
        this.university = university;
    }

    public void setScale(String scale) {
        this.scale = scale;
    }
}
