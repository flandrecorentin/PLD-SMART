package ifinsa.h4221backend.model;

public class AuthenticationRequest {
    private String login;
    private String password;

    public AuthenticationRequest() {
    }

    public AuthenticationRequest(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public String getLogin() {
        return login;
    }

    public String getPassword() {
        return password;
    }
}
