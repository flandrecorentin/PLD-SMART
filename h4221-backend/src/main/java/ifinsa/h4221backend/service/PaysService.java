package ifinsa.h4221backend.service;

import ifinsa.h4221backend.dao.PaysDAO;
import ifinsa.h4221backend.dao.UniversiteDAO;
import ifinsa.h4221backend.model.Pays;
import ifinsa.h4221backend.model.Universite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class PaysService {
    @Autowired
    PaysDAO paysDAO;

    @Autowired
    UniversiteDAO universiteDAO;

    public List<Pays> chercherToutPays() {
        try{
            return paysDAO.findAll();
        }
        catch (Exception exception){
            return null;
        }
    }

    public boolean sauvegarderToutPays(){
        try{
            List<String> listePays = new LinkedList<>();
            List<Universite> universites = universiteDAO.findAll();
            for (Universite universite:universites) {
                if(!listePays.contains(universite.getPays())){
                    listePays.add(universite.getPays());
                }
            }
            for (String stringPays:listePays) {
                Pays pays = new Pays(stringPays);
                paysDAO.save(pays);
            }
            return true;
        }
        catch (Exception exception){
            return false;
        }
    }
}
