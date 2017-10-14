import { NgModule, Component,OnInit } from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./app.component.css']
})
export class ModelFormComponent implements OnInit {

  langs: string[] = [
  	'English',
  	'French',
  	'Germain',
  ];

  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  ngOnInit() {
  	this.myform = new FormGroup({
  		name: new FormGroup({
  			firstName: new FormControl('', Validators.required),
  			lastName: new FormControl('', Validators.required),
  		}),
  		email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
  		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  		language: new FormControl()
  	});  	
  }
}
