package ifinsa.h4221backend.dao;

import ifinsa.h4221backend.model.FAQ;
import ifinsa.h4221backend.model.FormulaireREX;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@EnableMongoRepositories
@Repository
public interface FAQDAO extends MongoRepository<FAQ, String> {
    @Query("{question: ?0}")
    FAQ findByQuestion(String question);
}
