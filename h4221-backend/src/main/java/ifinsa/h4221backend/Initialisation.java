package ifinsa.h4221backend;

import ifinsa.h4221backend.model.Departement;
import ifinsa.h4221backend.model.User;
import ifinsa.h4221backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;

@Component
public class Initialisation implements ApplicationRunner {

//    Liste des services utiles à l'initialisation
    @Autowired
    UserService userService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // appel des services à faire à l'initialisation
        System.out.println("|| Debut Initialisation ");

        // Initialisation des "Users"
        List<User> users= new LinkedList<>();
        User corentin = new User("corentin.flandre@insa-lyon.fr", "Flandre", "Corentin", Departement.IF, 4, "Kungliga Tekniska högskolan", "Suède", "123456");
        User colin = new User("colin.thomas@insa-lyon.fr", "Thomas", "Colin", Departement.IF, 4, "Norges teknisk-naturvitenskapelige universitet", "Norvège", "123456");
        User elise = new User("elise.dubillot@insa-lyon.fr", "Dubillot", "Elise", Departement.IF, 4, "Trinity College", "Irlande", "123456");
        users.add(corentin);
        users.add(colin);
        users.add(elise);
        for (User user: users) {
            userService.inscrireService(user);
        }

        System.out.println("|| Fin Initialisation ");
    }

}
