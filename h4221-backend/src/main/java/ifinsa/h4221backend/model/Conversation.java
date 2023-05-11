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
import java.util.Arrays;

@Document("Conversation")
public class Conversation {

    @Id
    private ObjectId id;
    private String stringId;

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

    public boolean convertIdToString() {
       this.stringId = this.id.toString();
       if (this.stringId == null) return false;
       return true;
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
    public void setNombreDeMessages(String nombreDeMessages) {
        this.nombreDeMessages = Integer.parseInt(nombreDeMessages); ;
    }

    public void setMessageList(List<Message> messageList) {
        this.nombreDeMessages = 0;
        for (Message message: messageList) {
            this.messageList.add(this.nombreDeMessages,message);
            nombreDeMessages++;
        }
    }
    public int getNombreDeMessages() {
        return nombreDeMessages;
    }

    public List<Message> getMessageList() {
        return messageList;
    }

    public ObjectId getId() {
        return id;
    }

    public void setClosed(boolean closed) {
        this.closed = closed;
    }

    public boolean isClosed() {
        return closed;
    }

    public void setId(ObjectId id) {
        this.id = id;
        this.stringId = id.toHexString();
    }

    public String getStringId() {
        return stringId;
    }
}
