import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  userdata={
    name:'',
    lastname:'',
    email:'',
    password:''
  };

  constructor(private authservice: AuthService,private route: Router) { }

 register(){
  this.authservice.register(this.userdata)
.subscribe(
  (response)=>{
    console.log('user registered successfully',response);
    this.route.navigate(['/login']);
  },
  (error)=>{
    console.error('error registering user',error);
  }
);
 }
}
