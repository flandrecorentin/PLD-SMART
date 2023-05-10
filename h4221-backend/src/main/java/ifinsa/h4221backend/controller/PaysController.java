package ifinsa.h4221backend.controller;

import ifinsa.h4221backend.model.Pays;
import ifinsa.h4221backend.service.PaysService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class PaysController {

    @Autowired
    PaysService paysService;

    // POST exemple /attachment/{id}
    @GetMapping("/pays")
    public ResponseEntity<List<Pays>> chercherTousLesPays() {
        try {
            List<Pays> pays = paysService.chercherToutPays();
            if(pays.size()>0){
                System.out.println("[PaysController]: La récupération de "+pays.size()+" pays");
                return new ResponseEntity<>(pays, HttpStatus.OK);
            }else{
                System.out.println("[PaysController]: Aucun pays trouvés en base de données");
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception exception){
            System.out.println("[PaysController]: Le formulaire REX vierge n'a pas été trouvé dans le serveur backend");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
