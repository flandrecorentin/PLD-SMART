package ifinsa.h4221backend.controller;

import ifinsa.h4221backend.model.Universite;
import ifinsa.h4221backend.service.UniversiteService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
public class UniversiteController {

    @Autowired
    UniversiteService universiteService;

    @GetMapping("/universite")
    public ResponseEntity<List<Universite>> recupererUniversites(){
        try {
            List<Universite> universites = universiteService.chercherToutesUniversites();
            if(universites.size()>0){
                System.out.println("[UniversiteController]: La récupération des "+ universites.size() +" universites a réussi");
                return new ResponseEntity<>(universites, HttpStatus.OK);
            }
            else{
                System.out.println("[UniversiteController]: Aucune université n'a été trouvé");
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception exception){
            System.out.println("[UniversiteController]: La récupération des universites a rencontrés un problème côté backend");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/universite/{pays}")
    public ResponseEntity<JSONObject> recupererUniversitesParPays(@PathVariable(value="pays") String pays){
        try {
            List<Universite> universites = universiteService.chercherUniversitesParPays(pays);
            if(universites.size()>0){
                JSONObject jsonUniversitesParPays = new JSONObject();
                for (Universite universite: universites) {
                    jsonUniversitesParPays.put(universite.getIdentifiant(),universite.getNom());
                }
                System.out.println("[UniversiteController]: La récupération des "+ universites.size() +" universites a réussi");
                return new ResponseEntity<>(jsonUniversitesParPays, HttpStatus.OK);
            }
            else{
                System.out.println("[UniversiteController]: Aucune université n'a été trouvé pour le pays "+pays);
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception exception){
            System.out.println("[UniversiteController]: La récupération des universites pour le pays "+pays+" a rencontrés un problème côté backend");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
