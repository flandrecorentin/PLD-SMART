package ifinsa.h4221backend.dao;

import ifinsa.h4221backend.model.ExampleModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@EnableMongoRepositories
@Repository
public interface ExampleDAO extends MongoRepository<ExampleModel, String> {

    @Query("{id:'?0'")
    ExampleModel findDocById(String id);
}
