package ifinsa.h4221backend.controller;



import ifinsa.h4221backend.model.*;
import ifinsa.h4221backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin("*")
@RestController
public class ChatController {

    @Autowired
    ChatService chatService;

    // POST exemple /attachment/{id}
    @PostMapping("/conversation/{id}")
    public void uploadAttachedFile(@PathVariable(value = "id") String idTest) {
        exampleService.uploadAttachedFile(idTest);
    }

    @PostMapping("/conversation/message{texte, author, conversationId, }")
    public void uploadAttachedFile(@PathVariable(value = "id") String idTest) {
        exampleService.uploadAttachedFile(idTest);
    }

}
/*
package ifinsa.h4221backend.controller;

        import ifinsa.h4221backend.model.FormulaireREX;
        import ifinsa.h4221backend.model.User;
        import ifinsa.h4221backend.service.FormulaireREXService;
        import ifinsa.h4221backend.service.UserService;
        import org.json.simple.JSONObject;
        import org.json.simple.parser.JSONParser;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.*;

        import java.util.LinkedHashMap;
        import java.util.LinkedList;
        import java.util.List;

@CrossOrigin("*")
@RestController
public class FormulaireREXController {

    @Autowired
    FormulaireREXService formulaireREXService;

    @PostMapping("/formulaire")
    public ResponseEntity sauvegardeFormulaire(@RequestBody FormulaireREX formulaireREX){
        try{
            if(formulaireREXService.sauvegarder(formulaireREX)){
                System.out.println("[FormulaireREXController]: Sauvegarde du questionnaire");
                return new ResponseEntity(HttpStatus.OK);
            }else{
                System.out.println("[FormulaireREXController]: Le formulaire  a un format invalide");
                return new ResponseEntity(HttpStatus.CONFLICT);
            }
        }
        catch (Exception exception){
            System.out.println("[FormulaireREXController]: ERREUR lors de la sauvegarde du formulaire REX");
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/formulaire")
    public ResponseEntity<JSONObject> chargerFormulaireVierge(){
        try {
            JSONObject jsonFormulaire = formulaireREXService.chargerFormulaire();
            System.out.println("[FormulaireREXController]: Le formulaire REX vierge a été trouvé et va s'envoyer");
            return new ResponseEntity<>(jsonFormulaire, HttpStatus.OK);
        }
        catch (Exception exception){
            System.out.println("[FormulaireREXController]: Le formulaire REX vierge n'a pas été trouvé dans le serveur backend");
            return new ResponseEntity<>(new JSONObject(), HttpStatus.NOT_FOUND);
        }
    }
*/