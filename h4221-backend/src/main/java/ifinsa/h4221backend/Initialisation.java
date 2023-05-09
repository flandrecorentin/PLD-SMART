package ifinsa.h4221backend;

import ifinsa.h4221backend.model.Departement;
import ifinsa.h4221backend.model.Universite;
import ifinsa.h4221backend.model.User;
import ifinsa.h4221backend.service.UniversiteService;
import ifinsa.h4221backend.service.UserService;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.FileReader;
import java.util.LinkedList;
import java.util.List;

@Component
public class Initialisation implements ApplicationRunner {

//    Liste des services utiles à l'initialisation
    @Autowired
    UserService userService;

    @Autowired
    UniversiteService universiteService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // appel des services à faire à l'initialisation
        System.out.println("|| Debut Initialisation ");

        // Initialisation des "Users"
        List<User> users= new LinkedList<>();
        User corentin = new User("corentin.flandre@insa-lyon.fr", "Flandre", "Corentin", Departement.IF, 4, "Kungliga Tekniska högskolan", "Suède", "123456");
        User colin = new User("colin.thomas@insa-lyon.fr", "Thomas", "Colin", Departement.IF, 4, "Norges teknisk-naturvitenskapelige universitet", "Norvège", "123456");
        User elise = new User("elise.dubillot@insa-lyon.fr", "Dubillot", "Elise", Departement.IF, 4, "Trinity College", "Irlande", "123456");
        User elod = new User("admin@insa-lyon.fr", "Elod", "Admin", Departement.IF, 0, null, null, "12345678");
        elod.setRole("ROLE_ADMIN");
        users.add(corentin);
        users.add(colin);
        users.add(elise);
        users.add(elod);
        for (User user: users) {
            userService.inscrireService(user);
        }


        // Initialisation des Universites
        JSONParser jsonP = new JSONParser();
        JSONObject jsonO = (JSONObject) jsonP.parse(new FileReader("src/main/resources/static/liste_univ_pays_accord.json"));
        List<Universite> universites = new LinkedList<>();
        for(int i=0; i<jsonO.size(); i++){
            String key = jsonO.keySet().toArray()[i].toString();
            JSONObject jsonObject2 = (JSONObject) jsonO.get(key);
            String nom = jsonObject2.get("nom").toString();
            String pays = jsonObject2.get("pays").toString();
            Universite universite = new Universite(key, nom, pays);
            universites.add(universite);
        }
        for (Universite universite: universites) {
            universiteService.sauvegarderUniversite(universite);
        }

        System.out.println("|| Fin Initialisation ");
    }

}
