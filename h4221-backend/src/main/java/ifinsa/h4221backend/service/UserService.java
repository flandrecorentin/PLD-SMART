package ifinsa.h4221backend.service;

import ifinsa.h4221backend.config.JwtUtil;
import ifinsa.h4221backend.dao.UserModelDAO;
import ifinsa.h4221backend.model.AuthenticationRequest;
import ifinsa.h4221backend.model.User;
import ifinsa.h4221backend.model.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    UserModelDAO userModelDAO;

    @Autowired
    JwtUtil jwtUtil;

    private AuthenticationManager authenticationManager;

    public UserService(@Lazy AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    public boolean inscrireService(User user) {
        try {
            if (userModelDAO.findUserByMail(user.getMail()) == null) {
                user.setPassword(passwordEncoder.encode(user.getPassword()));
                userModelDAO.save(user);
                return true;
            } else {
                return false;
            }
        } catch (Exception exception) {
            return false;
        }
    }

    public boolean modifierParametres(User user) {
        try {
            if (userModelDAO.findUserByMail(user.getMail())!= null) {
                // on ne peut pas changer son MDP avec l'API REST sur la modification des paramètres
                user.setPassword(userModelDAO.findUserByMail(user.getMail()).getPassword());
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
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getLogin(),
                        authenticationRequest.getPassword()
                )
        );
        var user = userModelDAO.findUserByMail(authenticationRequest.getLogin());
        return user;
    }

    @Override
    public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException {
        return userModelDAO.findUserByMail(mail);
    }

    public UserInfo chercherParToken(String tokenUser){
        try {
            String mail = jwtUtil.extractUsername(tokenUser);
            User user = userModelDAO.findUserByMail(mail);
            UserInfo userInfo = new UserInfo(user.getMail(), user.getFirstName(), user.getLastName(), user.getDepartement(), user.getStudyYear(), user.getUniversity(), user.getCountry());
            return userInfo;
        }catch (Exception exception){
            return null;
        }
    }

    public int modificationMotDePasse(String tokenUser, String ancienPassword, String nouveauPassword){
        try{
            String mail = jwtUtil.extractUsername(tokenUser);
            User user = userModelDAO.findUserByMail(mail);
            System.out.println(user.getPassword()+"=="+ancienPassword);
            if(user==null){
                return 1;
            }else if(!passwordEncoder.matches(ancienPassword, user.getPassword())){
                return 2;
            }else if(passwordEncoder.matches(ancienPassword, user.getPassword())){
                // faire modification password
                user.setPassword(passwordEncoder.encode(nouveauPassword));
                userModelDAO.save(user);
                return 0;
            }else{

            }
            System.out.println(user);
            return 0;
        }catch (Exception exception){

            return 0;
        }
    }

    public String chercherRoleParToken(String tokenUser) {
        try{
            String mail = jwtUtil.extractUsername(tokenUser);
            User user = userModelDAO.findUserByMail(mail);
            String role = user.getRole();
            return role;
        }catch (Exception exception){
            return null;
        }
    }
}
