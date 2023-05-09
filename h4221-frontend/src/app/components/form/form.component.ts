import { Component, OnInit } from '@angular/core';
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

  constructor(private formService: FormService) {}

  alertResults (sender: Model) {
    const results = JSON.stringify(sender.data);
    console.log(results);
  }

  ngOnInit() {
    this.formService.getForm().subscribe(
      (res) => {
        const survey = new Model(res);
        this.surveyModel = survey;
        survey.onComplete.add(this.alertResults)
      }
    )
    
  }

}
