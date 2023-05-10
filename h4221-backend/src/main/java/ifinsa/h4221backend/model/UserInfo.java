package ifinsa.h4221backend.model;

public class UserInfo{
    private String mail;
    private String firstName;
    private String lastName;
    private Departement departement;
    private int studyYear;
    private String university;
    private String country;

    public UserInfo() {
    }

    public UserInfo(String mail, String firstName, String lastName, Departement departement, int studyYear, String university, String country) {
        this.mail = mail;
        this.firstName = firstName;
        this.lastName = lastName;
        this.departement = departement;
        this.studyYear = studyYear;
        this.university = university;
        this.country = country;
    }

    public String getMail() {
        return mail;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
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
}
