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
    public void inscrireService(User user){
        userModelDAO.save(user);
    }

    public boolean connexionService(PairAuthentification pairAuthentification) {
        if(userModelDAO.findUserByMailAndPassword(pairAuthentification.getLogin(), pairAuthentification.getPassword())==null)return true;
        else return false;
    }
}
