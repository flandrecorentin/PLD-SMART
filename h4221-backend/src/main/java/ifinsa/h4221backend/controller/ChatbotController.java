package ifinsa.h4221backend.controller;

import ifinsa.h4221backend.service.ChatbotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@CrossOrigin("*")
@RestController
public class ChatbotController {

    @Autowired
    ChatbotService chatbotService;

    public void ChatbotService (final ChatbotService chatbotService) {this.chatbotService = chatbotService;}

    @PostMapping ("/chatbot")
    public ResponseEntity<String> chatbotAnswer(@RequestBody String prompt){
        String answer;
        try {
            answer = chatbotService.ChatbotPrompt(prompt);
            return new ResponseEntity<>(answer, HttpStatus.OK);
        } catch (Exception exception){
            return new ResponseEntity<>(null,HttpStatus.FORBIDDEN);
        }
    }
}
