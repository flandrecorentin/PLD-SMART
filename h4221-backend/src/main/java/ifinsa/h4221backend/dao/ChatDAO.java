package ifinsa.h4221backend.dao;

import ifinsa.h4221backend.model.*;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import java.util.List;
import org.bson.types.ObjectId;

@Service
@EnableMongoRepositories
@Repository
public interface ChatDAO extends MongoRepository<Conversation, String> {

    @Query("{name:regex('?0')}")
    List<Conversation> searchConversations(String name);

    @Query("{name:'?0'}")
    Conversation findConversationByName(String name);


}
