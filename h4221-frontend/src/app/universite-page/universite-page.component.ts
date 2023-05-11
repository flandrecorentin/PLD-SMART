import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../config/chat.service';
import { UnivService } from '../config/univ.service';
import { FormService } from '../config/form.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs'; 

@Component({
  selector: 'app-universite-page',
  templateUrl: './universite-page.component.html',
  styleUrls: ['./universite-page.component.css'],
})
export class UniversitePageComponent implements OnInit, OnDestroy{
  univId:string;
  subscriptionMessageByConv:any;
  subscriptionUni:any;
  constructor(private univService: UnivService,private formService: FormService, private route: ActivatedRoute, private router: Router, private chatService: ChatService, private cdr: ChangeDetectorRef) {
    this.univId=""
  }

  fakeRex={
    "_id": {
      "$oid": "645d0eedb595c32219be06d9"
    },
    "author": "colin.thomas@insa-lyon.fr",
    "date": "10-05-2023",
    "information": {
      "UniversityHandleDifferences": "2",
      "ExchangeCountry": "Norvege",
      "OrganisationRentTransportMean": "true",
      "TransportDuration": "4",
      "OpenQuestionWhy": "Je voulais aller dans un pays du nord, et c'était une bonne université.",
      "BRMIE": "true",
      "ExchangeUniversity": "norges-teknisk-naturvitenskapelige-universitet",
      "AccomodationReservationDate": "2023-05-10",
      "TransportPrice": "399",
      "ERASMUS": "true",
      "AMI":"false",
      "AMIGrantAmount":"",
      "AMIApplicationDeadline":"",
      "AMIFirstContactDate":"",
      "UniversityGeneralFeeling": "4",
      "ExchangeType": "ERASMUS",
      "AccomodationNeighborhoodRecommendation": "Oui, le quartier \"Nardo\" au sud de NTNU possède plusieurs logements.",
      "OLADate": "2023-05-10",
      "ExchangePeriod": "SEMESTRE_1",
      "BRMIEApplicationDeadline": "2023-06-15",
      "AccomodationHowDidYouFind": "Website",
      "BRMIEFirstContactDate": "2023-05-10",
      "OrganisationPublicTransportSubscription": "false",
      "ModulesResponsibleName": "M. Gjovik Thorn",
      "UniversityLanguageCourse": "true",
      "UniversityPossibleToEnrollAssociation": "true",
      "GrantAmount": "1099",
      "ERASMUSDropInSessionForAttendanceCertificate": "false",
      "AccomodationHardToFind": "3",
      "ERASMUSOLAUniSIgnatureName": "M. Gjovick Thorn",
      "AccomodationUsefulWebsites": "hybel.no, sit.no",
      "ModuleInscriptionAbroad": "ByEmail",
      "CNI": "true",
      "OLAUniversityAcceptINSAPlatform": "true",
      "AccomodationType": "Chambre dans une collocation",
      "Module1": "Ethical hacking",
      "Module3": "Mobile Development",
      "Module2": "Customer Driven Project",
      "Module4": "Customer Driven Project",
      "Module5": "Customer Driven Project",
      "Module6": "Customer Driven Project",
      "Module7": "Customer Driven Project",
      "Module8": "Customer Driven Project",
      "UniversityStudentLife": "5",
      "ModulesWhenPick": "2023-09-01",
      "ModuleDescriptionModule1": "Course content\n\nThe course covers the theory and practical techniques of ethical hacking and penetration testing, which are essential elements in modern cybersecurity. Ethical hacking consists of testing the security of IT systems by trying to find and exploit security vulnerabilities. The course presents the steps of penetration testing including information gathering, network reconnaissance, how to get in touch with services, but also covers specific topics such as web hacking, binary exploitation, social engineering and wireless hacking.",
      "ModuleDescriptionModule2": "Course content\nEach group is given a task from a client that is to be carried out as a project. All phases of a development project are to be covered: Preliminary studies, requirements specification, design, implementation, and evaluation. The emphasis is on the early phases. It is important that the groups work in close collaboration with the client. The groups will hand in a project report and give a final presentation and demonstration of a runnable system to the client and the censor. The following days are obligatory: the starting day of the course which is on Tuesday in the semester's second week, the guest lectures and the course in group dynamics, and the weekly supervision. A failure to meet on these days may prevent the student from completing the course.",
      "ModuleDescriptionModule3": "Course content\nThis course teaches the basics of cross-platform mobile applications development with a focus on the React Native framework. The goal is to help students develop best practices for creating apps for both iOS and Android using JavaScript programming language.\n\nKeywords: JavaScript, React Native framework, development tools for building and debugging cross-platform mobile apps, UI design and implementation, handling of data and network calls, internationalisation of mobile app, use of device sensors.",
      "ModuleDescriptionModule4": "Course content\nThis course teaches the basics of cross-platform mobile applications development with a focus on the React Native framework. The goal is to help students develop best practices for creating apps for both iOS and Android using JavaScript programming language.\n\nKeywords: JavaScript, React Native framework, development tools for building and debugging cross-platform mobile apps, UI design and implementation, handling of data and network calls, internationalisation of mobile app, use of device sensors.",
      "ModuleDescriptionModule5": "Course content\nThis course teaches the basics of cross-platform mobile applications development with a focus on the React Native framework. The goal is to help students develop best practices for creating apps for both iOS and Android using JavaScript programming language.\n\nKeywords: JavaScript, React Native framework, development tools for building and debugging cross-platform mobile apps, UI design and implementation, handling of data and network calls, internationalisation of mobile app, use of device sensors.",
      "ModuleDescriptionModule6": "Course content\nThis course teaches the basics of cross-platform mobile applications development with a focus on the React Native framework. The goal is to help students develop best practices for creating apps for both iOS and Android using JavaScript programming language.\n\nKeywords: JavaScript, React Native framework, development tools for building and debugging cross-platform mobile apps, UI design and implementation, handling of data and network calls, internationalisation of mobile app, use of device sensors.",
      "ModuleDescriptionModule7": "Course content\nThis course teaches the basics of cross-platform mobile applications development with a focus on the React Native framework. The goal is to help students develop best practices for creating apps for both iOS and Android using JavaScript programming language.\n\nKeywords: JavaScript, React Native framework, development tools for building and debugging cross-platform mobile apps, UI design and implementation, handling of data and network calls, internationalisation of mobile app, use of device sensors.",
      "ModuleDescriptionModule8": "Course content\nThis course teaches the basics of cross-platform mobile applications development with a focus on the React Native framework. The goal is to help students develop best practices for creating apps for both iOS and Android using JavaScript programming language.\n\nKeywords: JavaScript, React Native framework, development tools for building and debugging cross-platform mobile apps, UI design and implementation, handling of data and network calls, internationalisation of mobile app, use of device sensors.",
      "BRMIEGrants": "1000",
      "AccomodationPrice": "500",
      "AccomodationDistanceToUni": "1500",
      "UniversityIntegration": "4",
      "MeanOfTransport": "Avion",
      "AccomodationWebsite": "hybel.no",
      "BankAccount": "false",
      "ModulesResponsibleMail": "exchange@st.ntnu.no",
      "TransportReservationWebsite": "https://www.klm.fr/",
      "ModulePossibleToChangeOnceArrived": "true",
      "TransportReservationDate": "2023-04-01",
      "OrganisationHealthInsurance": "true",
      "OpenQuestionMeetExpectation": "true",
      "UniversityAssociationRessources": "Le site de l'université : https://www.ntnu.edu/",
      "ModulesChangePeriodOnceArrived": "2",
      "ERASMUSFirstContactDate": "2023-04-04",
      "OrganisationPhone": "true"
    },
    "exchangeCountry": "Norvege",
    "exchangeUniversity": "norges-teknisk-naturvitenskapelige-universitet",
    "_class": "ifinsa.h4221backend.model.FormulaireREX"
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
    allRex=[this.fakeRex, this.fakeRex];


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


  
  TransportDuration=0;
  OpenQuestionWhy:string[]=[];
  AccomodationNeighborhoodRecommendation:string[]=[];
  TransportPrice=0;
  MeanOfTransport={
    "avion":0,
    "voiture":0,
    "bus":0
  }
  TransportReservationWebsite:string[]=[];
  TransportReservationDate:string[]=[];
  ModulesWhenPick:string[]=[];
  UniversityStudentLife=0;
  UniversityIntegration=0;
  UniversityGeneralFeelings=0;
  AccomodationReservationDate:string[]=[];
  AccomodationHowDidYouFind={
    Website:0,
    UniCampaign:0,
    Acquaintance:0
  }
  AccomodationType={
  "Studio_individuel":0,
  "Chambre_dans_une_collocation":0,
  "Chambre_seule_en_residence_universitaire":0,
  "Collocation_en_residence_universitaire":0,
  "Chambre_chez_lhabitant":0,
  "Chambre_dhotel":0
}
AccomodationHardToFind=0;
Modules:{ nom: any;descr: any }[]=[];
ModulesChangePeriodOnceArrived=0;
ModuleResponsibleName:string[]=[]
ModuleResponsibleMail:string[]=[]
ERASMUSOLAUniSIgnatureName:string[]=[];
ERASMUSFirstContactDate:string[]=[];
ERASMUSApplicationDeadline:string[]=[];
AmountErasmus=0;
AmountBRMIE=0;
BRMIEApplicationDeadline:string[]=[];
BRMIEFirstContactDate:string[]=[];
OlaDate:string[]=[];
AMIGrantAmount=0;
AMIApplicationDeadline:string[]=[];
AMIFirstContactDate:string[]=[];
TransportReservationDateMean=0;
TransportReservationDateMeanString:string="";
AccomodationReservationDateMeanString:string="";
AccomodationReservationDateMean=0;
OlaDateMeanString:string="";
OlaDateMean=0;
ERASMUSFirstContactDateMeanString:string="";
ERASMUSFirstContactDateMean=0;
BRMIEApplicationDeadlineMeanString:string="";
BRMIEApplicationDeadlineMean=0;
BRMIEFirstContactDateMeanString:string="";
BRMIEFirstContactDateMean=0;
AMIApplicationDeadlineMeanString:string="";
AMIApplicationDeadlineMean=0;
AMIFirstContactDateMeanString:string="";
AMIFirstContactDateMean=0;

afficherRex=true;



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

    const source = interval(1000)
    const text = 'Your Text Here';
    this.subscriptionMessageByConv = source.subscribe(
      val => this.chatService.chatGetMessagesByConv(this.displayedChat.stringId).subscribe(
      (rep: any) => {
        this.displayedChat=rep
        
        this.showMessages=true
      },
      (err:any)=>{

      }));
      
    this.subscriptionUni = source.subscribe(val => this.chatService.chatGetConvByUni(this.univId).subscribe(
      (rep: any) => {
        this.allChats=rep
      },
      (err:any)=>{
        
      }));

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

      
      var computeRex;
      var Rex;
      // PARTIE REX
      await this.formService.getRexByUniv(this.univId).forEach(
        (rep: any) => {
          console.log("REXDETAILS")
          console.log(rep)
          this.allRex=rep
        }).catch((reason:any)=>{
          
        this.afficherRex=false;
        });



      for(var rex of this.allRex){
        if("Module1" in rex.information){
          this.Modules.push({nom:rex.information.Module1, descr:rex.information.ModuleDescriptionModule1})
        }if("Module2" in rex.information){
          this.Modules.push({nom:rex.information.Module2, descr:rex.information.ModuleDescriptionModule2})
        }if("Module3" in rex.information){
          this.Modules.push({nom:rex.information.Module3, descr:rex.information.ModuleDescriptionModule3})
        }if("Module4" in rex.information){
          this.Modules.push({nom:rex.information.Module4, descr:rex.information.ModuleDescriptionModule4})
        }if("Module5" in rex.information){
          this.Modules.push({nom:rex.information.Module5, descr:rex.information.ModuleDescriptionModule5})
        }if("Module6" in rex.information){
          this.Modules.push({nom:rex.information.Module6, descr:rex.information.ModuleDescriptionModule6})
        }if("Module7" in rex.information){
          this.Modules.push({nom:rex.information.Module7, descr:rex.information.ModuleDescriptionModule7})
        }if("Module8" in rex.information){
          this.Modules.push({nom:rex.information.Module8, descr:rex.information.ModuleDescriptionModule8})
        }
        this.ModuleResponsibleMail.push(rex.information.ModulesResponsibleMail)
        this.ModuleResponsibleName.push(rex.information.ModulesResponsibleName)
        this.AccomodationHardToFind += +rex.information.AccomodationHardToFind;
        this.ModulesChangePeriodOnceArrived += +rex.information.ModulesChangePeriodOnceArrived;
        this.AccomodationReservationDate.push(rex.information.AccomodationReservationDate)
        this.UniversityGeneralFeelings+= +rex.information.UniversityGeneralFeeling
        this.UniversityIntegration+= +rex.information.UniversityIntegration
        this.UniversityStudentLife+= +rex.information.UniversityStudentLife
        this.TransportReservationWebsite.push(rex.information.TransportReservationWebsite)
        this.TransportReservationDate.push(rex.information.TransportReservationDate)
        
        this.TransportReservationDateMean+= (new Date(rex.information.TransportReservationDate)).getTime()
        this.AccomodationReservationDateMean+= (new Date(rex.information.AccomodationReservationDate)).getTime()
        this.OlaDateMean+= (new Date(rex.information.ERASMUSOLAUniSIgnatureName)).getTime()
        this.ERASMUSFirstContactDateMean+= (new Date(rex.information.ERASMUSFirstContactDate)).getTime()
        this.BRMIEApplicationDeadlineMean+= (new Date(rex.information.BRMIEApplicationDeadline)).getTime()
        this.BRMIEFirstContactDateMean+= (new Date(rex.information.BRMIEFirstContactDate)).getTime()
        this.AMIApplicationDeadlineMean+= (new Date(rex.information.AMIApplicationDeadline)).getTime()
        this.AMIFirstContactDateMean+= (new Date(rex.information.AMIFirstContactDate)).getTime()

        this.ModulesWhenPick.push(rex.information.ModulesWhenPick)
        this.TransportDuration += +rex.information.TransportDuration
        this.OpenQuestionWhy.push(rex.information.OpenQuestionWhy)
        console.log(rex.information.MeanOfTransport)
        if(rex.information.MeanOfTransport=="Voiture"){
          this.MeanOfTransport.voiture++;
        }else if(rex.information.MeanOfTransport=="Avion"){
          this.MeanOfTransport.avion++;
        }else if(rex.information.MeanOfTransport=="Bus"){
          this.MeanOfTransport.bus++;
        }
        if(rex.information.AccomodationHowDidYouFind=="Website"){
          this.AccomodationHowDidYouFind.Website++;
        }else if(rex.information.MeanOfTransport=="UniCampaign"){
          this.AccomodationHowDidYouFind.UniCampaign++;
        }else if(rex.information.MeanOfTransport=="Acquaintance"){
          this.AccomodationHowDidYouFind.Acquaintance++;
        }

        if(rex.information.AccomodationType=="Studio individuel"){
          this.AccomodationType.Studio_individuel++;
        }else if(rex.information.AccomodationType=="Chambre dans une collocation"){
          this.AccomodationType.Chambre_dans_une_collocation++;
        }else if(rex.information.AccomodationType=="Chambre seule en résidence universitaire"){
          this.AccomodationType.Chambre_seule_en_residence_universitaire++;
        }else if(rex.information.AccomodationType=="Collocation en résidence universitaire"){
          this.AccomodationType.Collocation_en_residence_universitaire++;
        }else if(rex.information.AccomodationType=="Chambre chez l'habitant"){
          this.AccomodationType.Chambre_chez_lhabitant++;
        }else if(rex.information.AccomodationType=="Chambre d'hôtel"){
          this.AccomodationType.Chambre_dhotel++;
        }


        this.AccomodationNeighborhoodRecommendation.push(rex.information.AccomodationNeighborhoodRecommendation);
        if(rex.information.BRMIE=="true"){
          this.AmountBRMIE += +rex.information.BRMIEGrants;
          this.BRMIEFirstContactDate.push(rex.information.BRMIEFirstContactDate);
          this.BRMIEApplicationDeadline.push(rex.information.BRMIEApplicationDeadline);
        
        } if(rex.information.ERASMUS=="true"){
          this.OlaDate.push(rex.information.OLADate);
          this.AmountErasmus += +rex.information.GrantAmount;
          this.ERASMUSFirstContactDate.push(rex.information.ERASMUSFirstContactDate);
        } if(rex.information.AMI=="true"){
          this.AMIGrantAmount += +rex.information.AMIGrantAmount;
          this.AMIApplicationDeadline.push(rex.information.AMIApplicationDeadline);
          this.AMIFirstContactDate.push(rex.information.AMIFirstContactDate);
        }
        this.TransportPrice+= +rex.information.TransportPrice
      
      
        // if(rex.information.ERASMUS=="true"){
        //   this.ERASMUSApplicationDeadline.push(rex.information.ERASLUS)
        // }
      }

      this.TransportDuration=this.TransportDuration/this.allRex.length;
      this.TransportPrice=this.TransportPrice/this.allRex.length;
      this.UniversityGeneralFeelings=this.UniversityGeneralFeelings/this.allRex.length;
      this.UniversityIntegration=this.UniversityIntegration/this.allRex.length;
      this.UniversityStudentLife=this.UniversityStudentLife/this.allRex.length;
      this.AccomodationHardToFind=this.AccomodationHardToFind/this.allRex.length;
      this.ModulesChangePeriodOnceArrived=this.ModulesChangePeriodOnceArrived/this.allRex.length;
      this.AmountErasmus=this.AmountErasmus/this.ERASMUSFirstContactDate.length;
      this.AmountBRMIE=this.AmountBRMIE/this.BRMIEFirstContactDate.length;
      this.AMIGrantAmount=this.AMIGrantAmount/this.AMIFirstContactDate.length;

      this.TransportDuration=Math.round(this.TransportDuration*10)/10;
      this.TransportPrice=Math.round(this.TransportPrice*10)/10;
      this.UniversityGeneralFeelings=Math.round(this.UniversityGeneralFeelings*10)/10;
      this.UniversityIntegration=Math.round(this.UniversityIntegration*10)/10;
      this.UniversityStudentLife=Math.round(this.UniversityStudentLife*10)/10;
      this.AccomodationHardToFind=Math.round(this.AccomodationHardToFind*10)/10;
      this.ModulesChangePeriodOnceArrived=Math.round(this.ModulesChangePeriodOnceArrived*10)/10;
      this.AmountErasmus=Math.round(this.AmountErasmus*10)/10;
      this.AmountBRMIE=Math.round(this.AmountBRMIE*10)/10;
      this.AMIGrantAmount=Math.round(this.AMIGrantAmount*10)/10;


      this.TransportReservationDateMean=this.TransportReservationDateMean/this.allRex.length;
      this.TransportReservationDateMeanString=new Date((new Date().setTime(this.TransportReservationDateMean))).toLocaleDateString()
      
      this.AccomodationReservationDateMean=this.AccomodationReservationDateMean/this.allRex.length;
      this.AccomodationReservationDateMeanString=new Date((new Date().setTime(this.AccomodationReservationDateMean))).toLocaleDateString()
      
      this.OlaDateMean=this.OlaDateMean/this.allRex.length;
      this.OlaDateMeanString=new Date((new Date().setTime(this.OlaDateMean))).toLocaleDateString()
      
      this.ERASMUSFirstContactDateMean=this.ERASMUSFirstContactDateMean/this.allRex.length;
      this.ERASMUSFirstContactDateMeanString=new Date((new Date().setTime(this.ERASMUSFirstContactDateMean))).toLocaleDateString()
      
      this.BRMIEApplicationDeadlineMean=this.BRMIEApplicationDeadlineMean/this.allRex.length;
      this.BRMIEApplicationDeadlineMeanString=new Date((new Date().setTime(this.BRMIEApplicationDeadlineMean))).toLocaleDateString()
      
      this.BRMIEFirstContactDateMean=this.BRMIEFirstContactDateMean/this.allRex.length;
      this.BRMIEFirstContactDateMeanString=new Date((new Date().setTime(this.BRMIEFirstContactDateMean))).toLocaleDateString()
      
      this.AMIApplicationDeadlineMean=this.AMIApplicationDeadlineMean/this.allRex.length;
      this.AMIApplicationDeadlineMeanString=new Date((new Date().setTime(this.AMIApplicationDeadlineMean))).toLocaleDateString()
      
      this.AMIFirstContactDateMean=this.AMIFirstContactDateMean/this.allRex.length;
      this.AMIFirstContactDateMeanString=new Date((new Date().setTime(this.AMIFirstContactDateMean))).toLocaleDateString()
  }

  ngOnDestroy() {
    this.subscriptionMessageByConv.unsubscribe();
    this.subscriptionUni.unsubscribe()
    console.log("Destroy")
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
