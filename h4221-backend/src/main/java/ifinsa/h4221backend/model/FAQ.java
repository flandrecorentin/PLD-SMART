package ifinsa.h4221backend.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Document("FAQ")
public class FAQ {

    // boolean isgeneral, question, list<reponse, author, nbvote+, nbvote-, dateréponse >,  authorquestion, date(création),
    private boolean isGeneral;
    private String question;
    private List<Reponse> reponses;
    private String author;
    private String date;

    public FAQ() {
    }
}
