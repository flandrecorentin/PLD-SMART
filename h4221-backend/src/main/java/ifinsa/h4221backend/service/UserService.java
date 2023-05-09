package ifinsa.h4221backend.service;

import ifinsa.h4221backend.dao.UserModelDAO;
import ifinsa.h4221backend.model.AuthenticationRequest;
import ifinsa.h4221backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    UserModelDAO userModelDAO;

    public boolean inscrireService(User user) {
        try {
            if (userModelDAO.findUserByMail(user.getMail()) == null) {
                userModelDAO.save(user);
                return true;
            } else {
                return false;
            }
        } catch (Exception exception) {
            return false;
        }
    }

    public User verifierConnexion(AuthenticationRequest authenticationRequest) {
        User user = null;
        try {
            user = userModelDAO.findUserByMailAndPassword(authenticationRequest.getLogin(), authenticationRequest.getPassword());
        } catch (Exception exception) {
            user = null;
        } finally {
            return user;
        }
    }

    public boolean connexionService(AuthenticationRequest authenticationRequest) {
        if (userModelDAO.findUserByMailAndPassword(authenticationRequest.getLogin(), authenticationRequest.getPassword()) == null)
            return true;
        else return false;
    }

    @Override
    public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException {
        return userModelDAO.findUserByMail(mail);
    }
}
