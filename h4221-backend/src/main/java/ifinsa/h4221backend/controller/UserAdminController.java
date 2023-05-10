package ifinsa.h4221backend.controller;

import ifinsa.h4221backend.config.JwtUtil;
import ifinsa.h4221backend.model.AuthenticationRequest;
import ifinsa.h4221backend.model.PasswordRequest;
import ifinsa.h4221backend.model.User;
import ifinsa.h4221backend.model.UserInfo;
import ifinsa.h4221backend.service.ExampleService;
import ifinsa.h4221backend.service.UserService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpHeaders;
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
                System.out.println("[UserAdminController]: Inscription de "+ user.getFullName());
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

    @PutMapping("/parametres")
    public ResponseEntity modifierParametres(@RequestBody User user){
        try{
            if(userService.modifierParametres(user)){
                System.out.println("[UserAdminController]: Modification de "+ user.getFullName() +" effectue");
                return new ResponseEntity(HttpStatus.OK);
            }else{
                System.out.println("[UserAdminController]: L'email " + user.getMail()+ " ne correspond a aucun compte");
                return new ResponseEntity(HttpStatus.CONFLICT);
            }
        }
        catch (Exception exception){
            System.out.println("[UserAdminController]: Problème de serveur");
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
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
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

    @GetMapping("/information")
    public ResponseEntity<UserInfo> chercherInformationUtilisateurConnecte(@RequestHeader(HttpHeaders.AUTHORIZATION) String tokenUser) {
        try{
            tokenUser = tokenUser.substring(7);
            UserInfo userInfo = userService.chercherParToken(tokenUser);
            if(userInfo!=null){
                System.out.println("[UserAdminController]: Récupération des informations de "+ userInfo.getFirstName() +" "+ userInfo.getLastName() +" effectue");
                return new ResponseEntity(userInfo, HttpStatus.OK);
            }else{
                System.out.println("[UserAdminController]: L'email " + userInfo.getMail()+ " ne correspond a aucun compte");
                return new ResponseEntity(null, HttpStatus.CONFLICT);
            }
        }
        catch (Exception exception){
            System.out.println("[UserAdminController]: Problème de serveur lors de la récupération de l'utilisateur");
            return new ResponseEntity(null, HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/role")
    public ResponseEntity<String> obtenirRoleUtilisateur(@RequestHeader(HttpHeaders.AUTHORIZATION) String tokenUser) {
        try{
            tokenUser = tokenUser.substring(7);
            String role = userService.chercherRoleParToken(tokenUser);
            if(role.equals("ROLE_ADMIN")||role.equals("ROLE_USER")){
                System.out.println("[UserAdminController]: Récupération du role "+role);
                return new ResponseEntity(role, HttpStatus.OK);
            }else{
                System.out.println("[UserAdminController]: Utilisateur non trouve ou problème token");
                return new ResponseEntity(null, HttpStatus.NOT_FOUND);
            }
        }
        catch (Exception exception){
            System.out.println("[UserAdminController]: Problème de serveur");
            return new ResponseEntity(null, HttpStatus.FORBIDDEN);
        }
    }

    @PutMapping("/changepassword")
    public ResponseEntity modifierParametresPassword(@RequestHeader(HttpHeaders.AUTHORIZATION) String tokenUser, @RequestBody PasswordRequest passwordRequest){
        System.out.println(passwordRequest.getAncienMDP()+":"+passwordRequest.getNouveauMDP());
        PasswordRequest test = new PasswordRequest("test1","test2");
        try{
            tokenUser = tokenUser.substring(7);
            int statut = userService.modificationMotDePasse(tokenUser, passwordRequest.getAncienMDP(), passwordRequest.getNouveauMDP());
            if(statut==0){
                System.out.println("[UserAdminController]: Modification du mot de passe effectué");
                return new ResponseEntity(HttpStatus.OK);
            }
            else if(statut==1){
                System.out.println("[UserAdminController]: Problème d'utilisateur");
                return new ResponseEntity(HttpStatus.CONFLICT);
            }else if(statut==2){
                System.out.println("[UserAdminController]: L'ancien mot de passe est incompatible");
                return new ResponseEntity(HttpStatus.FORBIDDEN);
            }else{
                return new ResponseEntity(HttpStatus.CONFLICT);
            }
        }
        catch (Exception exception){
            System.out.println("[UserAdminController]: Problème de serveur");
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
    }
}
