package ifinsa.h4221backend.service;

import ifinsa.h4221backend.dao.UserModelDAO;
import ifinsa.h4221backend.model.PairAuthentification;
import ifinsa.h4221backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserModelDAO userModelDAO ;
    public boolean inscrireService(User user){
        try{
            if(userModelDAO.findUserByMail(user.getMail())==null){
                userModelDAO.save(user);
                return true;
            }
            else{
                return false;
            }
        }
        catch (Exception exception) {
            return false;
        }
    }

    public User verifierConnexion(PairAuthentification pairAuthentification){
        User user = null;
        try {
            user = userModelDAO.findUserByMailAndPassword(pairAuthentification.getLogin(), pairAuthentification.getPassword());
        }catch (Exception exception){
            user=null;
        }finally {
            return user;
        }
    }

    public boolean connexionService(PairAuthentification pairAuthentification) {
        if(userModelDAO.findUserByMailAndPassword(pairAuthentification.getLogin(), pairAuthentification.getPassword())==null)return true;
        else return false;
    }

    public boolean connexionService(PairAuthentification pairAuthentification) {
        if(userModelDAO.findUserByMailAndPassword(pairAuthentification.getLogin(), pairAuthentification.getPassword())==null)return true;
        else return false;
    }
}
