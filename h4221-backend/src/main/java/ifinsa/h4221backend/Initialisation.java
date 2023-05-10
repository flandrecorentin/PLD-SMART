package ifinsa.h4221backend;

import ifinsa.h4221backend.model.Departement;
import ifinsa.h4221backend.model.FAQ;
import ifinsa.h4221backend.model.Universite;
import ifinsa.h4221backend.model.User;
import ifinsa.h4221backend.service.FAQService;
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

    @Autowired
    FAQService faqService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // appel des services à faire à l'initialisation
        System.out.println("|| Debut Initialisation ");

        // Initialisation des "Users"
        List<User> users= new LinkedList<>();
        User corentin = new User("corentin.flandre@insa-lyon.fr", "Flandre", "Corentin", Departement.IF, 4, "kungliga-tekniska-hogskolan-(kth)", "Suede", "123456");
        User colin = new User("colin.thomas@insa-lyon.fr", "Thomas", "Colin", Departement.IF, 4, "norges-teknisk-naturvitenskapelige-universitet", "Norvege", "123456");
        User elise = new User("elise.dubillot@insa-lyon.fr", "Dubillot", "Elise", Departement.IF, 4, "university-college-dublin", "Irlande", "123456");
        User tom = new User("tom.delaporte@insa-lyon.fr", "Delaporte", "Tom", Departement.IF, 5, "university-of-birmingham", "Royaume-Uni", "123456");
        User elod = new User("admin@insa-lyon.fr", "Elod", "Admin", Departement.IF, 0, null, null, "12345678");
        elod.setRole("ROLE_ADMIN");
        users.add(corentin);
        users.add(colin);
        users.add(elise);
        users.add(tom);
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


        // Initialisation des formulairesREX



        // Initialisation FAQ
        List<FAQ> faqs = new LinkedList<>();
        FAQ faq1 = new FAQ("Quels sont les documents à remplir pour la bourse Erasmus+?","Bourses", "Vous recevrez un mail vous demandant de vous connecter à MoveOn pour remplir votre OLA (Online Learning Agreement). Vous devrez en plus remplir un contrat d'études auprès de votre département.","colin.thomas@insa-lyon.fr", "elod@insa-lyon.fr","07-04-2023", "10-05-2023");
        FAQ faq2 = new FAQ("Combien de voeux peut-on demander ?","Voeux", "Cela dépend du département. Par exemple, en IF 2 voeux sont initialement demandés. Contactez votre coordinateur de département pour connaitre ce nombre.","elise.dubillot@insa-lyon.fr", "elod@insa-lyon.fr","09-05-2023", "10-05-2023");
        FAQ faq3 = new FAQ("Existe-t-il des conditions spécifiques pour demander un double diplôme (DD) ?","Candidature", "Il n y a aucunes conditions demandés par l'INSA pour les DD","corentin.flandre@insa-lyon.fr", "elod@insa-lyon.fr","05-05-2023", "08-05-2023");
        FAQ faq4 = new FAQ("Qu'est-ce qu'est la bourse AMI","Bourses", "C'est une bourse spécifique pour les étudiants boursiers du Crous","colin.thomas@insa-lyon.fr", "elod@insa-lyon.fr","05-05-2023", "10-05-2023");
        faqs.add(faq1);
        faqs.add(faq2);
        faqs.add(faq3);
        faqs.add(faq4);
        for (FAQ faq: faqs) {
            faqService.createFAQ(faq);
        }

        System.out.println("|| Fin Initialisation ");
    }

}
