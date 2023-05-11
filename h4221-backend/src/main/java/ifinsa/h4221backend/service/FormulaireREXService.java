package ifinsa.h4221backend.service;

import ifinsa.h4221backend.dao.FormulaireREXDAO;
import ifinsa.h4221backend.dao.FormulaireREXTempDAO;
import ifinsa.h4221backend.dao.UserModelDAO;
import ifinsa.h4221backend.model.FormulaireREX;
import ifinsa.h4221backend.model.FormulaireREXTemp;
import ifinsa.h4221backend.model.UserInfo;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.util.LinkedList;
import java.util.List;

@Service
public class FormulaireREXService {

    @Autowired
    FormulaireREXDAO formulaireREXDAO ;
    @Autowired
    FormulaireREXTempDAO formulaireREXTempDAO ;

    @Autowired
    UserService userService ;
    public boolean sauvegarder(FormulaireREX formulaireREX) {
        try{
            formulaireREXDAO.save(formulaireREX);
            return true;
        }
        catch (Exception exception) {
            return false;
        }
    }

    public JSONObject chargerFormulaire() {
        try{
            JSONParser jsonP = new JSONParser();
            JSONObject jsonO = (JSONObject) jsonP.parse(new FileReader("src/main/resources/static/form.json"));
            return jsonO;
        }
        catch (Exception exception){
            return new JSONObject();
        }
    }

    public List<FormulaireREX> findFormulaireREXsByExchangeUniversity(String university){
        try {
            return formulaireREXDAO.findAllByExchangeUniversity(university);
        }
        catch (Exception exception){
            return null;
        }
    }

    public List<FormulaireREX> findFormulaireREXsByExchangeCountry(String country){
        try {
            return formulaireREXDAO.findAllByExchangeCountry(country);
        }
        catch (Exception exception){
            return null;
        }
    }

    public boolean sauvegarderTemporairement(FormulaireREXTemp formulaireREXTemp){
        try{
            formulaireREXTempDAO.save(formulaireREXTemp);
            return true;
        }catch (Exception exception){
            return false;
        }
    }

    public FormulaireREXTemp chargerFormulaireREXTemp(String tokenUser) {
        try{
            tokenUser = tokenUser.substring(7);
            UserInfo userInfo = userService.chercherParToken(tokenUser);
            return formulaireREXTempDAO.findByAuthor(userInfo.getMail());
        }catch (Exception exception){
            return null;
        }
    }

    public boolean formulaireREXDejaEnvoye(String tokenUser) {
        try{
            tokenUser = tokenUser.substring(7);
            UserInfo userInfo = userService.chercherParToken(tokenUser);
            String mail = userInfo.getMail();
            return formulaireREXDAO.findByAuthor(mail)!=null;
        }catch (Exception exception){
            return false;
        }
    }

    public int supprimerREXTemp(String author) {
        try{
            FormulaireREXTemp formulaireREXTemp =  formulaireREXTempDAO.findByAuthor(author);
            if(formulaireREXTemp==null){
                return 1;
            }else{
                formulaireREXTempDAO.deleteFormulaireREXTempByAuthor(author);
                return 0;
            }
        }catch (Exception exception){
            return 2;
        }
    }
}
