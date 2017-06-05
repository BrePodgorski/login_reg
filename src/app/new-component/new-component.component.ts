import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {NgForm} from '@angular/forms';


@Component({

  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  user={
    name:'',
    email:'',
    password:''
  }
  users: Array<any> = [];
  attempts: number;
  // user = new User()
  constructor() { }

  ngOnInit() {
    console.log(this.users);
    this.attempts =3;
  }
  register(formData){
    this.users.push(formData.value);
    formData.reset();
    console.log(this.users);
  }
login(loginData){
  console.log("running login");
  for(let i=0; i<this.users.length; i++){
      if(this.users[i].email==loginData.value.email){
        alert("you logged in");
        return;
  }
}
this.attempts --;
  alert("not found");
    }
  }
