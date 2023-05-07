package ifinsa.h4221backend.service;

import ifinsa.h4221backend.dao.FormulaireREXDAO;
import ifinsa.h4221backend.dao.UserModelDAO;
import ifinsa.h4221backend.model.FormulaireREX;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormulaireREXService {

    @Autowired
    FormulaireREXDAO formulaireREXDAO ;
    public boolean sauvegarder(FormulaireREX formulaireREX) {
        try{
            formulaireREXDAO.save(formulaireREXDAO);
            return true;
        }
        catch (Exception exception) {
            return false;
        }
    }
}
