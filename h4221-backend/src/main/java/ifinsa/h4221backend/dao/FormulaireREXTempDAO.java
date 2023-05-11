package ifinsa.h4221backend.dao;

import ifinsa.h4221backend.model.FAQ;
import ifinsa.h4221backend.model.FormulaireREXTemp;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


@Service
@EnableMongoRepositories
@Repository
public interface FormulaireREXTempDAO extends MongoRepository<FormulaireREXTemp, String> {
    @Query("{author: ?0}")
    FormulaireREXTemp findByAuthor(String author);
}
