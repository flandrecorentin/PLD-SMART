package ifinsa.h4221backend.controller;

import ifinsa.h4221backend.model.Universite;
import ifinsa.h4221backend.service.UniversiteService;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ResponseEntity<JSONArray> recupererUniversitesParPays(@PathVariable(value="pays") String pays){
        try {
            List<Universite> universites = universiteService.chercherUniversitesParPays(pays);
            if(universites.size()>0){
                JSONArray jsonUniversitesParPays = new JSONArray();
                for (Universite universite: universites) {
                    JSONObject jsonUniversite = new JSONObject();
                    jsonUniversite.put("identifiant",universite.getIdentifiant());
                    jsonUniversite.put("nom",universite.getNom());
                    jsonUniversite.put("pays",universite.getPays());
                    jsonUniversitesParPays.add(jsonUniversite);
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

    @GetMapping("/universite/details/{univId}")
    public ResponseEntity<Universite> recupererUniversiteParIdentifiant(@PathVariable(value="univId") String univId){
        try {
            Universite universite = universiteService.chercherUniversite(univId);
            if(universite!=null){
                System.out.println("[UniversiteController]: La récupération des informations de l'universite "+ universite.getNom()+" a réussi");
                return new ResponseEntity<>(universite, HttpStatus.OK);
            }
            else{
                System.out.println("[UniversiteController]: L'identifiant "+univId+" ne correspond a aucune universite en BD");
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception exception){
            System.out.println("[UniversiteController]: La recherche de l'universite a rencontrés un problème côté backend");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
