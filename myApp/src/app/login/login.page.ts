import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  loginData={
    email:'',
    password:''
  };


  constructor(private authservice: AuthService, private router:Router) { }
login(){
  this.authservice.login(this.loginData).subscribe(
    (response)=>{
      console.log('user logged in succeful',response);
      localStorage.setItem('token',response.token);
      this.router.navigate(['/home']);
    },
    (error)=>{
      console.log('error logging in',error);
    }
  );
}
 

}
