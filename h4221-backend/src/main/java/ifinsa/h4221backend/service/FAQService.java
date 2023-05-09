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


    public boolean poserFAQ(FAQ faq) {
        try{
            faq.setReponse(null);
            faq.setAuthorReponse(null);
            faq.setDateReponse(null);
            faqdao.save(faq);
            return true;
        }
        catch (Exception exception) {
            return false;
        }
    }

    public boolean repondreFAQ(FAQ faq) {
        try{
            String reponse = faq.getReponse();
            String categorie = faq.getCategorie();
            String authorReponse = faq.getAuthorReponse();
            String dateReponse = faq.getDateReponse();
            faq = faqdao.findByQuestion(faq.getQuestion());
            faq.setAuthorReponse(authorReponse);
            faq.setReponse(reponse);
            faq.setCategorie(categorie);
            faq.setDateReponse(dateReponse);
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
