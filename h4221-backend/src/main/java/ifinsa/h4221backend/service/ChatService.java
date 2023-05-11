package ifinsa.h4221backend.service;

import ifinsa.h4221backend.dao.ChatDAO;
import ifinsa.h4221backend.model.*;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.bson.types.ObjectId;

import java.io.FileReader;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Service
public class ChatService {

    @Autowired
    ChatDAO chatDAO;

    public boolean postMessage(Message message) {
        try {
            Optional<Conversation> optionalConversation = chatDAO.findById(message.getConversation());
            if (optionalConversation.isPresent()) {
                Conversation conversation = optionalConversation.get();
                conversation.posterMessage(message);
                chatDAO.save(conversation);
            } else {
                return false;
            }
            return true;
        } catch (Exception exception) {
            return false;
        }
    }

    public boolean createConversation(Conversation conversation) {
        try {
            chatDAO.save(conversation);
            return true;
        } catch (Exception exception) {
            return false;
        }
    }


    public List<Conversation> getConversationByUni(String university){
        try{
            return chatDAO.findAllByUni(university);
        }
        catch (Exception exception){
            return null;
        }
    }

    public List<Conversation> getConversationByName(String name){
        try{
            return chatDAO.findAllByName(name);
        }
        catch (Exception exception){
            return null;
        }
    }

    public Conversation getConversationById(String id) {
        try {
            Optional<Conversation> optionalConversation = chatDAO.findById(id);
            if (optionalConversation.isPresent()) {
                return optionalConversation.get();
            } else {
                return null;
            }
        } catch (Exception exception) {
            return null;
        }
    }

    public List<Conversation> getConversationsByNameAndUni(String name, String university){
        try{
            return chatDAO.findAllByNameAndUni(name, university);
        }
        catch (Exception exception){
            return null;
        }
    }

}
