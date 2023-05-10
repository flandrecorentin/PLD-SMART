package ifinsa.h4221backend.controller;

import ifinsa.h4221backend.model.*;
import ifinsa.h4221backend.service.ChatService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@CrossOrigin("*")
@RestController
public class ChatController {

    @Autowired
    ChatService chatService;

    @PostMapping("/conversation/speak")
    public ResponseEntity postMessage(@RequestBody Message message) {
        try{
            if(chatService.postMessage(message)){
                System.out.println("[ChatController]: post du message: "+message.getText());
                return new ResponseEntity(HttpStatus.OK);
            }else{
                System.out.println("[ChatController]: Le message a un format invalide");
                return new ResponseEntity(HttpStatus.CONFLICT);
            }
        }
        catch (Exception exception){
            System.out.println("[ChatController]: ERREUR lors de la sauvegarde de la conversation");
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping("/conversation/create")
    public ResponseEntity createConversation(@RequestBody Conversation conversation) {
        try{
            if(chatService.createConversation(conversation)){
                System.out.println("[ChatController]: creation de la conversation: "+conversation.getName());
                return new ResponseEntity(HttpStatus.OK);
            }else{
                System.out.println("[ChatController]: La conversation a un format invalide");
                return new ResponseEntity(HttpStatus.CONFLICT);
            }
        }
        catch (Exception exception){
            System.out.println("[ChatController]: ERREUR lors de la sauvegarde de la  nouvelle conversation");
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

};