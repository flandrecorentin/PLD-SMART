package ifinsa.h4221backend.service;

import ifinsa.h4221backend.dao.FormulaireREXDAO;
import ifinsa.h4221backend.dao.UserModelDAO;
import ifinsa.h4221backend.model.FormulaireREX;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.util.LinkedList;
import java.util.List;

@Service
public class ConversationService {

    @Autowired
    ConversationDAO conversationDAO ;
    public boolean posterMessage(ObjectId author, String texte, ObjectId conversationID) {
        try{
            Conversation conversation = chatDAO.getConversationByID();
            Message message = Message(author, texte);
            conversation.posterMessage

            chatDAO.posterMessage(message);
            return true;
        }
        catch (Exception exception) {
            return false;
        }
    }

    /*public JSONObject chargerFormulaire() {
        try{
            JSONParser jsonP = new JSONParser();
            JSONObject jsonO = (JSONObject) jsonP.parse(new FileReader("src/main/resources/static/form.json"));
            return jsonO;
        }
        catch (Exception exception){
            return new JSONObject();
        }
    }

    public List<FormulaireREX> findFormulaireREXsByExchangeUniversity(String university){
        try {
            return formulaireREXDAO.findAllByExchangeUniversity(university);
        }
        catch (Exception exception){
            return null;
        }
    }*/
}
