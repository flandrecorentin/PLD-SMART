package ifinsa.h4221backend.dao;

import ifinsa.h4221backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@EnableMongoRepositories
@Repository
public interface FormulaireREXDAO extends MongoRepository<FormulaireREXDAO, Long> {

    @Query("{id:'?0'}")
    User findUserById(Long id);

}
