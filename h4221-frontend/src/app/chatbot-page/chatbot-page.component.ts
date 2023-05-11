import { Component } from '@angular/core';
import {ChatbotService} from "../config/chatbot.service";

interface Message {
  text: string;
  from: 'user' | 'bot';
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot-page.component.html',
  styleUrls: ['./chatbot-page.component.css']
})
export class ChatbotComponent {

  public messages: Message[] = [];
  public newMessage = '';

  constructor(private chatbotService : ChatbotService) { }
  public sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ text: this.newMessage, from: 'user' });
      //We ask the chatbot to answer
      this.chatbotService.getAnswerFromBot(this.newMessage)
        .subscribe(response => {
          this.messages.push({ text: response, from: 'bot' });
        });
      this.newMessage = '';
    }
  }
}

