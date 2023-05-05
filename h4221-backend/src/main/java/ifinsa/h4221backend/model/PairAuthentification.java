package ifinsa.h4221backend.model;

public class PairAuthentification {
    private String login;
    private String password;

    public PairAuthentification(){
    }
    public PairAuthentification(String login, String password) {
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
