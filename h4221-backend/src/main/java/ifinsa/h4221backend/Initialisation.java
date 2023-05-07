package ifinsa.h4221backend;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class Initialisation implements ApplicationRunner {

//    Liste des services utiles à l'initialisation
//    @Autowired
//    UserService userService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // appel des services à faire à l'initialisation
        System.out.println("|| Debut Initialisation ");


        System.out.println("|| Fin Initialisation ");
    }

}
