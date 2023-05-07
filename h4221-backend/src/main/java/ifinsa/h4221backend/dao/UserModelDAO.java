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
public interface UserModelDAO extends MongoRepository<User, String> {

    @Query("{mail:'?0'}")
    User get(String mail);

    @Query("{mail: ?0, password: ?1}")
    User findUserByMailAndPassword(String mail, String password);
}
