import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

cname: string ='';


user:User=new User(
  "amod",
  "amod@gmail.com",
  "I am Software engg", 
  "Male",
  "patna"
  
  
);
  formSubmitted(userForm:NgForm)
  {
   
    this.user.name="Nisha"
    this.user.email="Nisha@gmail.com"
    this.user.about="mai change kiya"
    this.user.gender="Female"
    this.user.city="Nashik"
    alert("Form Submitted")
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
