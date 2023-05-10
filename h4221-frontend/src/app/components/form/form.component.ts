import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/config/form.service';
import { Model } from "survey-core"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = 'My first survey';
  surveyModel !: Model;

  constructor(private formService: FormService, private router: Router) {}

  sendResults (sender: Model) {
    const mail = localStorage.getItem('mail');
    const date = formatDate(Date.now(), 'dd-MM-yyyy', 'en');
    var results : JSON = JSON.parse('{}');
    Object.assign(results, 
      { 
      "author": mail,
      "date": date,
      "information": sender.data
    });
    this.formService.sendForm(results).subscribe(
      res => {
        console.log(res)
      }
    )
  }

  ngOnInit() {
    this.formService.getForm().subscribe(
      (res) => {
        const survey = new Model(res);
        this.surveyModel = survey;
        survey.onComplete.add(this.sendResults.bind(this))
      }
    )
    
  }

}
