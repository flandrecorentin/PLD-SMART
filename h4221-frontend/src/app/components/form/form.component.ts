import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { Model } from "survey-core"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = 'My first survey';
  surveyModel !: Model;

  constructor(private formService: FormService, private router: Router) { }

  flattenObject = (obj: any) => {
    const flattened: any = {}

    Object.keys(obj).forEach((key) => {
      const value = obj[key.toString()]

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.assign(flattened, this.flattenObject(value))
      } else if (Array.isArray(value)) {
        for (const i in value) {
          flattened[value[i]] = true
        }
      }
      else {
        flattened[key] = value
      }
    })
    return flattened
  }

  sendResults(sender: Model) {
    const mail = localStorage.getItem('mail');
    const date = formatDate(Date.now(), 'dd-MM-yyyy', 'en');
    const results: JSON = JSON.parse('{}');
    Object.assign(results,
      {
        "author": mail,
        "date": date,
        "information": this.flattenObject(sender.data)
      });
    this.formService.sendForm(results).subscribe(
      res => {
        this.router.navigateByUrl('/home');
      }
    )
  }

  sendPartialResults(sender: Model) {
    if (sender.isCurrentPageValid) {
      const mail = localStorage.getItem('mail');
      const results: JSON = JSON.parse('{}');
      Object.assign(results,
        {
          "author": mail,
          "formulairetemp": sender.data
        });
      this.formService.sendPartialForm(results).subscribe(
        res => {
          this.router.navigateByUrl('/home');
        }
      )
    }
  }

  ngOnInit() {
    this.formService.getForm().subscribe(
      (res) => {
        const survey = new Model(res);
        this.surveyModel = survey;
        let partialResults: JSON = JSON.parse('{}');
        this.formService.getPartialForm().subscribe(
          data => {
            partialResults = data;
            survey.data = partialResults;
          })
        survey.onComplete.add(this.sendResults.bind(this))
      }
    )

  }

}
