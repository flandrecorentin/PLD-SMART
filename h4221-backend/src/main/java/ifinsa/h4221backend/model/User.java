package ifinsa.h4221backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Document("Utilisateur")
public class User implements UserDetails {

    @Id
    private String mail;
    private String firstName;
    private String lastName;
    private String password;
    private String role = "ROLE_USER";
    private Departement departement;
    private int studyYear;
    private String university;
    private String country;
    private String password;

    public User() {
    }

    public User(String mail, String firstName, String lastName, Departement departement, int studyYear, String university, String country, String password) {
        this.mail = mail;
        this.firstName = firstName;
        this.lastName = lastName;
        this.departement = departement;
        this.studyYear = studyYear;
        this.university = university;
        this.country = country;
        this.password = password;
    }

public String getFullName() {
        return firstName + " " + lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getMail() {
        return mail;
    }

    @Override
    public Set<GrantedAuthority> getAuthorities() {
        Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority(this.role));
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return mail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }


    public String getRole() {
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