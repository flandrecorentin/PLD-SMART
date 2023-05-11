package ifinsa.h4221backend.dao;

import ifinsa.h4221backend.model.*;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@EnableMongoRepositories
@Repository
public interface ChatDAO extends MongoRepository<Conversation, String> {

    @Query(value = "{name: { $regex: ?0, $options: 'i' } }", fields = "{messageList: 0}")
    List<Conversation> findAllByName(String name);

    @Query(value = "{university: ?0}", fields = "{messageList: 0}")
    List<Conversation> findAllByUni(String university);


}
