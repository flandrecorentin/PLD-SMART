package ifinsa.h4221backend.dao;

import ifinsa.h4221backend.model.FormulaireREX;
import ifinsa.h4221backend.model.Universite;
import ifinsa.h4221backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@EnableMongoRepositories
@Repository
public interface UniversiteDAO extends MongoRepository<Universite, String> {


}

