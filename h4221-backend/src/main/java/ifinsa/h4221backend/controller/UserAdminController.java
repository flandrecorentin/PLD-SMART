package ifinsa.h4221backend.controller;

import ifinsa.h4221backend.model.PairAuthentification;
import ifinsa.h4221backend.model.User;
import ifinsa.h4221backend.service.ExampleService;
import ifinsa.h4221backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@CrossOrigin("*")
@RestController
public class UserAdminController {

    @Autowired
    UserService userService;

    public UserAdminController(final UserService userService){
        this.userService = userService;
    }

    @PostMapping("/inscription")
    public ResponseEntity inscrire(@RequestBody User user){
        try{
            if(userService.inscrireService(user)){
                System.out.println("[UserAdminController]: Inscription de "+ user.getName());
                return new ResponseEntity(HttpStatus.OK);
            }else{
                System.out.println("[UserAdminController]: L'email " + user.getMail()+ " est déjà utilisé");
                return new ResponseEntity(HttpStatus.CONFLICT);
            }
        }
        catch (Exception exception){
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
    }

    @PostMapping("/connexion")
    public ResponseEntity<User> connexion(@RequestBody PairAuthentification pairAuthentification){
        try{
            User user = userService.verifierConnexion(pairAuthentification);
            if(user==null){
                System.out.println("[UserAdminController]: La pair d'authenfication |" +pairAuthentification.getLogin()+ "| |"+pairAuthentification.getPassword()+"| n'est pas correcte");
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }else{
                System.out.println("[UserAdminController]: Connexion de " + user.getName());
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
        } catch(Exception exception){
            System.out.println("[UserAdminController]: Problème de serveur");
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }
}
