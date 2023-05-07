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
            exception.printStackTrace();
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/formulaire")
    public ResponseEntity<JSONObject> chargerFormulaireVierge(){
        try {
            JSONObject jsonFormulaire = formulaireREXService.chargerFormulaire();
            return new ResponseEntity<>(jsonFormulaire, HttpStatus.OK);
        }
        catch (Exception exception){
            return new ResponseEntity<>(new JSONObject(), HttpStatus.NOT_FOUND);
        }
    }
}
