import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
formSubmitted() {
alert("Thanks For Submitting the form")
}
  NumberOfKeyword: string = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Initialization logic goes here if needed.
  }

  userForm = new FormGroup({
    name: new FormControl('',[Validators.minLength(4),Validators.maxLength(12)]),
    email: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    about: new FormControl('',[Validators.required])
  });

  loginForm = this.formBuilder.group({
    Email: ['', [Validators.required,Validators.email]],
    Password: ['', Validators.required, Validators.pattern('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/')],
  });

  SubmitHere() {
    if (this.loginForm.controls.Email.hasError('minlength')) {
      alert('Fill proper email details');
    } else {
      console.log(this.loginForm.value);
    }
  }
}
