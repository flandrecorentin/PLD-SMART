package ifinsa.h4221backend.model;

public class PasswordRequest {

    private String ancienMDP;
    private String nouveauMDP;

    public PasswordRequest() {
    }

    public PasswordRequest(String ancienMDP, String nouveauMDP) {
        this.ancienMDP = ancienMDP;
        this.nouveauMDP = nouveauMDP;
    }

    public String getAncienMDP() {
        return ancienMDP;
    }

    public void setAncienMDP(String ancienMDP) {
        this.ancienMDP = ancienMDP;
    }

    public String getNouveauMDP() {
        return nouveauMDP;
    }

    public void setNouveauMDP(String nouveauMDP) {
        this.nouveauMDP = nouveauMDP;
    }
}
