package ifinsa.h4221backend.controller;

import ifinsa.h4221backend.model.*;
import ifinsa.h4221backend.service.ChatService;
import org.json.simple.JSONArray;
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
        try {
            if (chatService.createConversation(conversation)) {
                System.out.println("[ChatController]: creation de la conversation: " + conversation.getName());
                return new ResponseEntity(HttpStatus.OK);
            } else {
                System.out.println("[ChatController]: La conversation a un format invalide");
                return new ResponseEntity(HttpStatus.CONFLICT);
            }
        } catch (Exception exception) {
            System.out.println("[ChatController]: ERREUR lors de la sauvegarde de la  nouvelle conversation");
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/conversationsByUni/{university}")
    public ResponseEntity<List<Conversation>> getConversationsByUniversity(@PathVariable(value="university") String university){
        try {
            List<Conversation> conversations = chatService.getConversationByUni(university);
            if(conversations.size()>0){
                for (Conversation conversation : conversations) { conversation.convertIdToString(); }
                System.out.println("[ChatController]: La récupération des "+ conversations.size() +" conversations a réussi");
                return new ResponseEntity<>(conversations, HttpStatus.OK);
            }
            else{
                System.out.println("[ChatController]: Aucune conversation n'a été trouvé pour l'université "+university);
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception exception){
            System.out.println("[ChatController]: La récupération des conversations pour l'université "+university+" a rencontrés un problème côté backend");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/conversationsByName/{name}")
    public ResponseEntity<List<Conversation>> getConversationsByName(@PathVariable(value="name") String name){
        try {
            List<Conversation> conversations = chatService.getConversationByName(name);
            if(conversations.size()>0){
                for (Conversation conversation : conversations) { conversation.convertIdToString(); }
                System.out.println("[ChatController]: (by name) La récupération des "+ conversations.size() +" conversations a réussi");
                return new ResponseEntity<>(conversations, HttpStatus.OK);
            }
            else{
                System.out.println("[ChatController]: (by name) Aucune conversation n'a été trouvé pour la chaine de caractères "+name);
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception exception){
            System.out.println("[ChatController]: (by name) La récupération des conversations pour la chaine de caractères "+name+" a rencontrés un problème côté backend");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/conversationById/{id}")
    public ResponseEntity<Conversation> getConversationsById(@PathVariable(value="id") String id){
        try {
            Conversation conversation = chatService.getConversationById(id);
            if(conversation != null){
                conversation.convertIdToString();
                System.out.println("[ChatController]: La récupération de la conversation a réussi");
                return new ResponseEntity<>(conversation, HttpStatus.OK);
            }
            else{
                System.out.println("[ChatController]: Aucune conversation n'a été trouvé pour l'id' "+id);
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception exception){
            System.out.println("[ChatController]: La récupération de la conversation d'id "+id+" a rencontrés un problème côté backend");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




};