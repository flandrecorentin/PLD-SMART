package ifinsa.h4221backend.controller;

import ifinsa.h4221backend.model.FormulaireREX;
import ifinsa.h4221backend.model.User;
import ifinsa.h4221backend.service.FormulaireREXService;
import ifinsa.h4221backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class FormulaireREXController {

    @Autowired
    FormulaireREXService formulaireREXService;

    @PostMapping("/formulaire")
    public ResponseEntity inscrire(@RequestBody FormulaireREX formulaireREX){
        try{
            System.out.println(formulaireREX.toString());
            if(formulaireREXService.sauvegarder(formulaireREX)){
                System.out.println("[FormulaireREXController]: Sauvegarde du questionnaire d'identifiant "+ formulaireREX.getId());
                return new ResponseEntity(HttpStatus.OK);
            }else{
                System.out.println("[FormulaireREXController]: Le formulaire d'identifiant " + formulaireREX.getId()+ " a un format invalide");
                return new ResponseEntity(HttpStatus.CONFLICT);
            }
        }
        catch (Exception exception){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
    }
}
