import { Component } from '@angular/core';

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

  public sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ text: this.newMessage, from: 'user' });
      //We ask the chatbot to answe
      this.newMessage
      this.messages.push({ text: 'Réponse du chatbot', from: 'bot' });
      this.newMessage = '';
    }
  }

}

