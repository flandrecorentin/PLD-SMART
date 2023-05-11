package ifinsa.h4221backend.controller;

import ifinsa.h4221backend.model.FormulaireREX;
import ifinsa.h4221backend.model.FormulaireREXTemp;
import ifinsa.h4221backend.model.User;
import ifinsa.h4221backend.model.UserInfo;
import ifinsa.h4221backend.service.FormulaireREXService;
import ifinsa.h4221backend.service.UserService;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
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


    @GetMapping("/formulaire/university/{university}")
    public ResponseEntity<List<FormulaireREX>> chercherFormulaireParUniversite(@PathVariable(value="university") String university){
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

    @GetMapping("/formulaire/country/{country}")
    public ResponseEntity<List<FormulaireREX>> chercherFormulaireParPays(@PathVariable(value="country") String country){
        List<FormulaireREX> formulaireREXs = new LinkedList<>();
        try {
            formulaireREXs = formulaireREXService.findFormulaireREXsByExchangeCountry(country);
            if(formulaireREXs.size()==0){
                System.out.println("[FormulaireREXController]: Aucun formulaire REX avec le pays " + country +" est renseigné en base de donnée");
                return new ResponseEntity<>(formulaireREXs, HttpStatus.NOT_FOUND);
            }
            else{
                System.out.println("[FormulaireREXController]: Récupération de " + formulaireREXs.size()+ " formulaires REX correspondant au pays "+ country);
                return new ResponseEntity<>(formulaireREXs, HttpStatus.OK);
            }
        }
        catch (Exception exception){
            System.out.println("[FormulaireREXController]: ERREUR lors de la récupération des formulaires REX");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/formulaire-temp")
    public ResponseEntity posterFormulaireREXTemp(@RequestBody FormulaireREXTemp formulaireREXTemp){
        try {
            boolean state = formulaireREXService.sauvegarderTemporairement(formulaireREXTemp);
            if(state){
                System.out.println("[FormulaireREXController]: Sauvegarde du formulaire REX " + formulaireREXTemp.getAuthor());
                return new ResponseEntity<>(formulaireREXTemp, HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception exception){
            System.out.println("[FormulaireREXController]: ERREUR lors de la sauvegarde du formulaire REX temporaire");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/formulaire-temp")
    public ResponseEntity<JSONObject> chercherFormulaireREXTemp(@RequestHeader(HttpHeaders.AUTHORIZATION) String tokenUser){
        try {
            FormulaireREXTemp formulaireREXTemp = formulaireREXService.chargerFormulaireREXTemp(tokenUser);
            if(formulaireREXTemp!=null){
                System.out.println("[FormulaireREXController]: Chargement du formulaire REX temporaire de " + formulaireREXTemp.getAuthor());
                return new ResponseEntity<>(formulaireREXTemp.getFormulairetemp(), HttpStatus.OK);
            }
            else{
                System.out.println("[FormulaireREXController]: Formulaire REX Temporaire non trouvé");
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception exception){
            System.out.println("[FormulaireREXController]: ERREUR lors de la sauvegarde du formulaire REX temporaire");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/formulaire-alreadysend")
    public ResponseEntity<Boolean> formulaireREXDejaEnvoye(@RequestHeader(HttpHeaders.AUTHORIZATION) String tokenUser){
        try {
            boolean dejaEnvoye = formulaireREXService.formulaireREXDejaEnvoye(tokenUser);
            if(dejaEnvoye){
                System.out.println("[FormulaireREXController]: Formulaire REX déjà envoyé par l'utilisateur");
                return new ResponseEntity<>(dejaEnvoye, HttpStatus.OK);
            }
            else if(!dejaEnvoye){
                System.out.println("[FormulaireREXController]: Formulaire REX non envoyé par l'utilisateur");
                return new ResponseEntity<>(dejaEnvoye, HttpStatus.OK);
            }
            else{
                System.out.println("[FormulaireREXController]: Formulaire REX Temporaire non trouvé");
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception exception){
            System.out.println("[FormulaireREXController]: ERREUR lors de la sauvegarde du formulaire REX temporaire");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
