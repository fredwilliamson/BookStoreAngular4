import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });
 
  constructor(private fb: FormBuilder) { console.log("login constructeur")}

  ngOnInit() {
  }

  submitLoginForm(){
    console.log("submit form")
  }
}
