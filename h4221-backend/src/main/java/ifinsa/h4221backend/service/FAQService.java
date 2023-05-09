package ifinsa.h4221backend.service;

import ifinsa.h4221backend.dao.FAQDAO;
import ifinsa.h4221backend.dao.FormulaireREXDAO;
import ifinsa.h4221backend.model.FAQ;
import ifinsa.h4221backend.model.FormulaireREX;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FAQService {

    @Autowired
    FAQDAO faqdao;


    public boolean sauvegarderFAQ(FAQ faq) {
        try{
            faqdao.save(faq);
            return true;
        }
        catch (Exception exception) {
            return false;
        }
    }

    public List<FAQ> findAllFAQ(){
        try {
            return faqdao.findAll();
        }
        catch (Exception exception){
            return null;
        }
    }
}
