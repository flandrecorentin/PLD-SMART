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

@CrossOrigin("*")
@RestController
public class UserAdminController {

    @Autowired
    UserService userService;

    public UserAdminController(final UserService userService){
        this.userService = userService;
    }

    @PostMapping("/inscription")
    public void inscrire(@RequestBody User user){
        System.out.println("------------------------Controller---------------------------");
        System.out.println("-------------------------------------------------------------");
        System.out.println(user.getName());
        System.out.println("-------------------------------------------------------------");
        System.out.println("-------------------------------------------------------------");
        userService.inscrireService(user);

//        return new ResponseStatus(HttpStatus.OK);
    }

    @PostMapping("/connexion")
    public ResponseEntity<User> connexion(@RequestBody PairAuthentification pairAuthentification){
        try{
            User user = userService.verifierConnexion(pairAuthentification);
            if(user==null){
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }else{
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
        } catch(Exception exception){
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }
}
