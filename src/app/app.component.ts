import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



  export class AppComponent{

  title = 'reactive-form';

  signupForm = new FormGroup({

    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    age:new FormControl('',[Validators.required,Validators.min(10),Validators.max(50)]),
    // email:new FormControl('',[Validators.required,Validators.pattern('^([0-9a-zA-Z]([-\\.\\w][0-9a-zA-Z])@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$')]),

    email:new FormControl('',[Validators.required,Validators.email]),
    gender:new FormControl('',[Validators.required]),
    department:new FormControl('',[Validators.required]),
  });

    handleSubmit(){
    console.log(this.signupForm.value);
  }

  get f(){
    return this.signupForm.controls;
  }
}
