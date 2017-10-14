import { NgModule, Component, Pipe, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

//import { countrySelect } from 'ng-country-select/dist/ng-country-select.js';

import {BrowserModule} from '@angular/platform-browser';

//var countries = require('country-list')();

@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./app.component.css']
})
export class ModelFormComponent implements OnInit {

  countries: string[] = [
  	'AUR',
  	'FRA',
  	'GER',
    'UK',
    'USA',
    'Others'
  ];

langs: string[] = [
  "C",
  "C#",
  "C++",
  "CSS",
  "Go",
  "Java",
  "JavaScript",
  "Objective C",
  "PHP",
  "Python",
  "R",
  "Ruby",
  "Shell",
  "VimL",
  "Others"
  ];

  myform: FormGroup;  
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  address: FormGroup;
    street: FormControl;
    zip: FormControl;
    city: FormControl;
  password: FormControl;
  language: FormControl;
  country: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  } 

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.language = new FormControl('', Validators.required);
    this.country = new FormControl('', Validators.required);
    this.address = new FormGroup({
      street: new FormControl(),
      zip: new FormControl(),
      city: new FormControl()
    })
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language,
      country: this.country,
      address: new FormGroup({
        street: this.street,
        zip: this.zip,
        city: this.city
      }),
    }); 
  }

  onsubmit() {
    if (this.myform.valid) {
      // code...
      console.log("Form submitted successfully");
      this.myform.reset();
    }
  }

  resetUserForm() {
    this.myform.reset();
  }
}
