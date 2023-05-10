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
}
