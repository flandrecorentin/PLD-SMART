import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../config/chat.service';
import { UnivService } from '../config/univ.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs'; 
@Component({
  selector: 'app-universite-page',
  templateUrl: './universite-page.component.html',
  styleUrls: ['./universite-page.component.css'],
})
export class UniversitePageComponent {
  univId:string;

  constructor(private univService: UnivService, private route: ActivatedRoute, private router: Router, private chatService: ChatService, private cdr: ChangeDetectorRef) {
    this.univId=""
    
  }
  fakeUniv = {
    "nom": "Technische Universitat Wien",
    "pays": "Autriche",
    "debuts1": "01/10/2020",
    "Fins1": "31/01/2021",
    "debuts2": "01/03/2021",
    "finS2": "30/06/2021",
    "candidature": "-",
    "ville": "Wien",
    "url": "http://www.tuwien.ac.at",
    "Fichier": "N/A",
    "accords": [
        {
            "nom": "Technische Universitat Wien - Accord de double-diplome 1 - IF",
            "place": "1/2.00 Periode academique ( 2023/24 )",
            "descr": "https://www.tuwien.at/en/studies/international/virtual-welcome-centre/incoming-exchange-students/",
            "niveauLV": "B1"
        },
        {
            "nom": "Technische Universitat Wien - Erasmus + SMS (etudiante) - BS",
            "place": "2/2.00 Periode academique ( 2023/24 )",
            "descr": "https://www.tuwien.at/en/studies/international/incoming-exchange-students",
            "niveauLV": "B1/B2 Allemand et/ou B1 anglais"
        },
        {
            "nom": "Technische Universitat Wien - Erasmus + SMS (etudiante) - GCU",
            "place": "2/2.00 Periode academique ( 2023/24 )",
            "descr": "https://www.tuwien.at/en/studies/international/incoming-exchange-students",
            "niveauLV": "B1/B2 Allemand et/ou B1 anglais"
        },
        {
            "nom": "Technische Universitat Wien - Erasmus + SMS (etudiante) - GE",
            "place": "3/3.00 Periode academique ( 2023/24 )",
            "descr": "https://www.tuwien.at/en/studies/international/incoming-exchange-students",
            "niveauLV": "B1/B2 Allemand et/ou B1 anglais"
        },
        {
            "nom": "Technische Universitat Wien - Erasmus + SMS (etudiante) - GI",
            "place": "4/4.00 Periode academique ( 2023/24 )",
            "descr": "https://www.tuwien.at/en/studies/international/incoming-exchange-students",
            "niveauLV": "B1/B2 Allemand et/ou B1 anglais"
        },
        {
            "nom": "Technische Universitat Wien - Erasmus + SMS (etudiante) - GM",
            "place": "4/4.00 Periode academique ( 2023/24 )",
            "descr": "https://www.tuwien.at/en/studies/international/incoming-exchange-students",
            "niveauLV": "B1/B2 Allemand et/ou B1 anglais"
        },
        {
            "nom": "Technische Universitat Wien - Erasmus + SMS (etudiante) - IF",
            "place": "2/2.00 Periode academique ( 2023/24 )",
            "descr": "https://www.tuwien.at/en/studies/international/incoming-exchange-students",
            "niveauLV": "B1/B2 Allemand et/ou B1 anglais"
        },
        {
            "nom": "Technische Universitat Wien - Erasmus + SMS (etudiante) - SGM",
            "place": "2/2.00 Periode academique ( 2023/24 )",
            "descr": "https://www.tuwien.at/en/studies/international/incoming-exchange-students",
            "niveauLV": "B1/B2 Allemand et/ou B1 anglais"
        },
        {
            "nom": "Technische Universitat Wien - Erasmus + SMS (etudiante) - TC",
            "place": "3/3.00 Periode academique ( 2023/24 )",
            "descr": "https://www.tuwien.at/en/studies/international/incoming-exchange-students",
            "niveauLV": "B1/B2 Allemand et/ou B1 anglais"
        }
      ]
    }
    univDetails=this.fakeUniv;


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

  noConv=false;
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

    const source = interval(1000);
    const text = 'Your Text Here';
    var subscription = source.subscribe(val => this.chatService.chatGetMessagesByConv(this.displayedChat.stringId).subscribe(
      (rep: any) => {
        this.displayedChat=rep
        
        this.showMessages=true
      }),(error:any)=>{

      });
      
    var subscription2 = source.subscribe(val => this.chatService.chatGetConvByUni(this.univId).subscribe(
      (rep: any) => {
        this.allChats=rep
      }),(error:any)=>{
        
      });

    //   this.chatService.chatGetConvByUni(this.univId).subscribe(
    //     (rep: any) => {
    //       this.allChats=rep
    //       this.selectedChat=rep[0];
    //       console.log(this.allChats)
    //       console.log(this.selectedChat)
    //     },
    //     (error:any) => {
    //       console.log(error);
    //       this.noConv = true;
    //     });
    
    // //Partie CHAT
    // if(this.noConv==false){
    //   await this.chatService.chatGetConvByUni(this.univId).forEach(
    //     (rep: any) => {
    //       this.allChats=rep
    //       this.selectedChat=rep[0];
    //       console.log(this.allChats)
    //       console.log(this.selectedChat)
    //     });
    //   this.chatService.chatGetMessagesByConv(this.allChats[0].stringId).subscribe(
    //     (rep: any) => {
    //       this.displayedChat=rep
    //       console.log(this.displayedChat)
    //     });
    // }
    



      // PARTIE UNIV
      this.univService.getDetailsUniv(this.univId).subscribe(
        (rep: any) => {
          this.univDetails=rep
          console.log("UNIVDETAILS")
          console.log(this.univDetails)
        });













  }
  reveal(i:any){
    this.chatService.chatGetMessagesByConv(this.allChats[i].stringId).subscribe(
      (rep: any) => {
        this.displayedChat=rep
        console.log(this.displayedChat)
      });
  }
  showMessages=false
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
