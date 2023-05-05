package ifinsa.h4221backend.controller;

import ifinsa.h4221backend.model.PairAuthentification;
import ifinsa.h4221backend.model.User;
import ifinsa.h4221backend.service.ExampleService;
import ifinsa.h4221backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
        userService.inscrireService(user);
//        return new ResponseStatus(HttpStatus.OK);
    }

    @PostMapping("/connexion")
    public ResponseEntity connexion(@RequestBody PairAuthentification pairAuthentification){
        boolean authentificationValidation = userService.connexionService(pairAuthentification);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
