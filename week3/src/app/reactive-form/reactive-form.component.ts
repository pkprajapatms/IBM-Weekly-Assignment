import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  logIn!:FormGroup 

  constructor() { }

  ngOnInit(): void {
    this.logIn=new FormGroup({
      'fname': new FormControl('',[Validators.required,Validators.minLength(3)]) ,
      'lname':new FormControl(''),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(7)]),
      

  })
  }
  Onsubmit(){
    alert("Information saved !")

    console.log(this.logIn.value)
    console.log(this.logIn.status)
  }
  get f():any{
    return this.logIn.get('fname')
  }
  get l():any{
    return this.logIn.get('lname')
  }
  get e():any{
    return this.logIn.get('email')
  }
  get p():any{
    return this.logIn.get('password')
  }
}
