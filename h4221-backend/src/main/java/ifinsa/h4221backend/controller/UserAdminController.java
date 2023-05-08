package ifinsa.h4221backend.controller;

import ifinsa.h4221backend.config.JwtUtil;
import ifinsa.h4221backend.model.AuthenticationRequest;
import ifinsa.h4221backend.model.User;
import ifinsa.h4221backend.service.ExampleService;
import ifinsa.h4221backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserAdminController {

    @Autowired
    JwtUtil jwtUtil;

    @Autowired
    UserService userService;

    public UserAdminController(final UserService userService) {
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
    public ResponseEntity<String> connexion(@RequestBody AuthenticationRequest authenticationRequest) {
        try {
            User user = userService.verifierConnexion(authenticationRequest);
            if (user == null) {
                System.out.println("[UserAdminController]: La pair d'authenfication |" + authenticationRequest.getLogin() + "| |" + authenticationRequest.getPassword() + "| n'est pas correcte");
                return new ResponseEntity<>("Invalid credentials", HttpStatus.NOT_FOUND);
            } else {
                System.out.println("[UserAdminController]: Connexion de " + user.getFullName());
                String token = jwtUtil.generateToken(user);
                return new ResponseEntity<>(token, HttpStatus.OK);
            }
        } catch(Exception exception){
            System.out.println("[UserAdminController]: Problème de serveur");
            return new ResponseEntity<>("Server issues", HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/isAuthenticated")
    public ResponseEntity<Boolean> isAuthenticated() {
        try {
            return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity<>(Boolean.FALSE, HttpStatus.FORBIDDEN);
        }
    };
}
