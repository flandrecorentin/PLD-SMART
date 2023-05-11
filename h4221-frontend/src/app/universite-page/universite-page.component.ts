import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../config/chat.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs'; 
@Component({
  selector: 'app-universite-page',
  templateUrl: './universite-page.component.html',
  styleUrls: ['./universite-page.component.css'],
})
export class UniversitePageComponent {
  univId:string;

  constructor(private route: ActivatedRoute, private router: Router, private chatService: ChatService, private cdr: ChangeDetectorRef) {
    this.univId=""
    
  }
  messageType={
    author:"",
    date:"",
    text:""
  }
  displayedChat={
    messageList:[this.messageType],
    name:"",
    creationDate:"",
    creator:"",
    stringId:""
  }
  selectedChat={name:"",
                creationDate:"",
              stringId:""}
  allChats = [
    this.selectedChat
  ]
  async ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.univId = params['univId'];
      }
    );
    if(this.univId==null){
      console.log("Identifiant d'université absent")
      this.router.navigateByUrl("/home")
    }

    const source = interval(5000);
    const text = 'Your Text Here';
    var subscription = source.subscribe(val => this.chatService.chatGetMessagesByConv(this.displayedChat.stringId).subscribe(
      (rep: any) => {
        this.displayedChat=rep
        console.log(this.displayedChat)
      }));
      
    var subscription2 = source.subscribe(val => this.chatService.chatGetConvByUni(this.univId).forEach(
      (rep: any) => {
        this.allChats=rep
        this.selectedChat=rep[0];
        console.log(this.allChats)
        console.log(this.selectedChat)
      }));


    
    //Partie CHAT
    await this.chatService.chatGetConvByUni(this.univId).forEach(
      (rep: any) => {
        this.allChats=rep
        this.selectedChat=rep[0];
        console.log(this.allChats)
        console.log(this.selectedChat)
      });
    this.chatService.chatGetMessagesByConv(this.allChats[0].stringId).subscribe(
      (rep: any) => {
        this.displayedChat=rep
        console.log(this.displayedChat)
      });

















  }
  reveal(i:any){
    this.chatService.chatGetMessagesByConv(this.allChats[i].stringId).subscribe(
      (rep: any) => {
        this.displayedChat=rep
        console.log(this.displayedChat)
      });
  }
  showMessages=true
  async envoiMessage(texte:string){
    var conversationId=this.displayedChat.stringId
    var author=localStorage.getItem("mail")
    var date=new Date();
    var dateFormat=date.toDateString()
    await this.chatService.chatSendMessage({"author":author,"date":dateFormat,"text":texte,"conversation":conversationId}).forEach(
      (rep: any) => {
      }
    );
    
    this.chatService.chatGetMessagesByConv(this.displayedChat.stringId).subscribe(
      (rep: any) => {
        this.displayedChat=rep
        console.log(this.displayedChat)
      });
    (<HTMLInputElement>document.getElementById("contenuMessageEnvoi")).value="";
    // this.chatService.chatGetMessagesByConv(this.displayedChat.stringId).subscribe(
    //   (rep: any) => {
    //     this.displayedChat=rep
    //     console.log(this.displayedChat)
    //   });
    // this.displayedChat={
    //   name:this.displayedChat.name,
    //   messageList:[...this.displayedChat.messageList],
    //   creationDate:this.displayedChat.creationDate,
    //   creator:this.displayedChat.creator,
    //   stringId:this.displayedChat.stringId,
    // }
  }

  async creerConv(name:string){
    var creator=localStorage.getItem("mail")
    var date=new Date();
    var dateFormat=date.toDateString()
    await this.chatService.chatCreateConv({"creator":creator,"name":name,"creationDate":dateFormat,"university":this.univId,"scale":"","closed":""}).forEach(
      (rep: any) => {
      }
    );
    (<HTMLInputElement>document.getElementById("contenuMessageEnvoi")).value="";
    // this.chatService.chatGetMessagesByConv(this.displayedChat.stringId).subscribe(
    //   (rep: any) => {
    //     this.displayedChat=rep
    //     console.log(this.displayedChat)
    //   });
    await this.chatService.chatGetConvByUni(this.univId).forEach(
      (rep: any) => {
        this.allChats=rep
        console.log(this.allChats)
      });
    this.allChats=[...this.allChats];
      
    (<HTMLInputElement>document.getElementById("nomConv")).value="";
  }

}
