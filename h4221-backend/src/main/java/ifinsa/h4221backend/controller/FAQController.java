package ifinsa.h4221backend.controller;

import ifinsa.h4221backend.model.FAQ;
import ifinsa.h4221backend.model.FormulaireREX;
import ifinsa.h4221backend.service.FAQService;
import ifinsa.h4221backend.service.FormulaireREXService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@CrossOrigin("*")
@RestController
public class FAQController {
    @Autowired
    FAQService faqService;

    @PostMapping("/faq")
    public ResponseEntity sauvegarderFAQ(@RequestBody FAQ faq){
        try{
            if(faqService.sauvegarderFAQ(faq)){
                System.out.println("[FAQController]: Sauvegarde de la FAQ: "+faq.getQuestion());
                return new ResponseEntity(HttpStatus.OK);
            }else{
                System.out.println("[FAQController]: La FAQ a un format invalide");
                return new ResponseEntity(HttpStatus.CONFLICT);
            }
        }
        catch (Exception exception){
            System.out.println("[FAQController]: ERREUR lors de la sauvegarde de la FAQ");
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/faq")
    public ResponseEntity<List<FAQ>> chargerAllFAQ(){
        List<FAQ> faqs = new LinkedList<>();
        try {
            faqs = faqService.findAllFAQ();
            System.out.println("[FormulaireREXController]: "+faqs.size() +" ont été trouvés");
            return new ResponseEntity<>(faqs, HttpStatus.OK);
        }
        catch (Exception exception){
            System.out.println("[FormulaireREXController]: Les FAQ n'ont pas été trouvé dans le serveur backend");
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }


}
