package ifinsa.h4221backend.service;

import ifinsa.h4221backend.dao.FormulaireREXDAO;
import ifinsa.h4221backend.dao.UniversiteDAO;
import ifinsa.h4221backend.model.Universite;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.util.LinkedList;
import java.util.List;

@Service
public class UniversiteService {

    @Autowired
    UniversiteDAO universiteDAO;

    public List<Universite> chercherToutesUniversites() {
        try{
            return universiteDAO.findAll();
        }
        catch (Exception exception){
            return null;
        }
    }

    public boolean sauvegarderUniversite(Universite universite){
        try{
            universiteDAO.save(universite);
            return true;
        }
        catch (Exception exception){
            return false;
        }
    }
}
