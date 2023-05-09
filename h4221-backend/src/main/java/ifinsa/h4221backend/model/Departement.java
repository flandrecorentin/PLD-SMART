package ifinsa.h4221backend.model;

public enum Departement {
    BS("Bioscience"),
    GM("Génie mécanique"),
    GCU("Génie Civil et Urbanisme"),
    GE("Génie Electrique"),
    GEN("Génie énergétique et de l'environnement"),
    GI("Génie Industriel"),
    IF("Informatique"),
    SGM("Sciences et Génie des Matériaux"),
    TC("Télécommunications");

    public final String label;

    private Departement(String label) {
        this.label = label;
    }
}
