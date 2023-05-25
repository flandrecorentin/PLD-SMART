package ifinsa.h4221backend.service;

import ifinsa.h4221backend.dao.ChatDAO;
import ifinsa.h4221backend.model.Conversation;
import ifinsa.h4221backend.model.Message;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ChatServiceTest {

    @Mock
    private ChatDAO chatDAO;

    private ChatService chatService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        chatService = new ChatService();
        chatService.setChatDAO(chatDAO);
    }

    @Test
    void testPostMessage() {
        Conversation conversation = new Conversation();
        conversation.setId("conversationId");
        Message message = new Message();
        message.setConversation("conversationId");
        when(chatDAO.findById("conversationId")).thenReturn(Optional.of(conversation));
        assertTrue(chatService.postMessage(message));
        verify(chatDAO, times(1)).save(conversation);
    }

    @Test
    void testPostMessageWithInvalidConversation() {
        Message message = new Message();
        message.setConversation("conversationId");
        when(chatDAO.findById("conversationId")).thenReturn(Optional.empty());
        assertFalse(chatService.postMessage(message));
        verify(chatDAO, never()).save(any());
    }

    @Test
    void testCreateConversation() {
        Conversation conversation = new Conversation();
        assertTrue(chatService.createConversation(conversation));
        verify(chatDAO, times(1)).save(conversation);
    }

    @Test
    void testGetConversationByUni() {
        List<Conversation> conversations = new ArrayList<>();
        when(chatDAO.findAllByUni("university")).thenReturn(conversations);
        assertEquals(conversations, chatService.getConversationByUni("university"));
    }

    @Test
    void testGetConversationByName() {
        List<Conversation> conversations = new ArrayList<>();
        when(chatDAO.findAllByName("name")).thenReturn(conversations);
        assertEquals(conversations, chatService.getConversationByName("name"));
    }

    @Test
    void testGetConversationById() {
        Conversation conversation = new Conversation();
        when(chatDAO.findById("conversationId")).thenReturn(Optional.of(conversation));
        assertEquals(conversation, chatService.getConversationById("conversationId"));
    }

    @Test
    void testGetConversationByIdWithInvalidId() {
        when(chatDAO.findById("conversationId")).thenReturn(Optional.empty());
        assertNull(chatService.getConversationById("conversationId"));
    }

    @Test
    void testGetConversationsByNameAndUni() {
        List<Conversation> conversations = new ArrayList<>();
        when(chatDAO.findAllByNameAndUni("name", "university")).thenReturn(conversations);
        assertEquals(conversations, chatService.getConversationsByNameAndUni("name", "university"));
    }
}