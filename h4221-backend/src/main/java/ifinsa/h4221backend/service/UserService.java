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
        System.out.println("------------------------Controller---------------------------");
        System.out.println("-------------------------------------------------------------");
        System.out.println(user.getName());
        System.out.print("Inscription de "+user.getName());
        System.out.println("-------------------------------------------------------------");
        System.out.println("-------------------------------------------------------------");
        userModelDAO.save(user);
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
}
