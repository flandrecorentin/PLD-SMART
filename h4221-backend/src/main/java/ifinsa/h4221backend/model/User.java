package ifinsa.h4221backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Utilisateur")
public class User{

    @Id
    private String mail;
    private String name;
    private String surname;
    private Role role;
    private Departement departement;
    private int studyYear;
    private String university;
    private String country;
    private String password;



    public User() {
        this.role = Role.STUDENT;
    }

    public User(String mail, String name, String surname, Departement departement, int studyYear, String university, String country, String password) {
        this.mail = mail;
        this.name = name;
        this.surname = surname;
        this.departement = departement;
        this.studyYear = studyYear;
        this.university = university;
        this.country = country;
        this.password = password;
        this.role = Role.STUDENT;
    }

    public String getName() {
        return name;
    }

    public String getMail() {
        return mail;
    }

    public String getSurname() {
        return surname;
    }

    public Role getRole() {
        return role;
    }

    public Departement getDepartement() {
        return departement;
    }

    public int getStudyYear() {
        return studyYear;
    }

    public String getUniversity() {
        return university;
    }

    public String getCountry() {
        return country;
    }

    public void setPassword(String password) {
        this.password = password;
        System.out.println("SET PASSWORD"+password);
    }
}