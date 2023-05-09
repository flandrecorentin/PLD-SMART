import { Component, OnInit } from '@angular/core';
import { Model } from "survey-core"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  surveyModel !: Model;

  alertResults (sender: Model) {
    const results = JSON.stringify(sender.data);
    console.log(results);
  }

  ngOnInit() {
    const survey = new Model(testForm);
    this.surveyModel = survey;
    survey.onComplete.add(this.alertResults);
  }

}
