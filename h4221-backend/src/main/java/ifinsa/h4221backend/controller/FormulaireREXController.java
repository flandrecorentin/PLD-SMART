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
public class /FormulaireREXController {

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


    @GetMapping("/formulaire/{university}")
    public ResponseEntity<List<FormulaireREX>> chargerFormulaireVierge(@PathVariable(value="university") String university){
        List<FormulaireREX> formulaireREXs = new LinkedList<>();
        try {
            formulaireREXs = formulaireREXService.findFormulaireREXsByExchangeUniversity(university);
            if(formulaireREXs.size()==0){
                System.out.println("[FormulaireREXController]: Aucun formulaire REX avec l'université " + university +" est renseigné en base de donnée");
                return new ResponseEntity<>(formulaireREXs, HttpStatus.NOT_FOUND);
            }
            else{
                System.out.println("[FormulaireREXController]: Récupération de " + formulaireREXs.size()+ " formulaires REX correspondant à l'université "+ university);
                return new ResponseEntity<>(formulaireREXs, HttpStatus.OK);
            }
        }
        catch (Exception exception){
            System.out.println("[FormulaireREXController]: ERREUR lors de la récupération des formulaires REX");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
