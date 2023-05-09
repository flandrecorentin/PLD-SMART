package ifinsa.h4221backend.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("FAQ")
public class FAQ {

    @Id
    private String question;
    private String reponse;
    private String authorQuestion;
    private String authorReponse;
    private String dateQuestion;
    private String dateReponse;

    public FAQ() {
    }

    public String getQuestion() {
        return question;
    }

    public String getReponse() {
        return reponse;
    }

    public String getAuthorQuestion() {
        return authorQuestion;
    }

    public void setAuthorQuestion(String authorQuestion) {
        this.authorQuestion = authorQuestion;
    }

    public String getAuthorReponse() {
        return authorReponse;
    }

    public void setAuthorReponse(String authorReponse) {
        this.authorReponse = authorReponse;
    }

    public String getDateQuestion() {
        return dateQuestion;
    }

    public void setDateQuestion(String dateQuestion) {
        this.dateQuestion = dateQuestion;
    }

    public String getDateReponse() {
        return dateReponse;
    }

    public void setDateReponse(String dateReponse) {
        this.dateReponse = dateReponse;
    }

    public String getDate() {
        return dateQuestion;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public void setReponse(String reponse) {
        this.reponse = reponse;
    }

    public void setAuthor(String author) {
        this.authorQuestion = author;
    }

    public void setDate(String date) {
        this.dateQuestion = date;
    }
}