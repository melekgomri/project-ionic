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
  login() {
    this.authservice.login(this.loginData).subscribe(
      (response) => {
        console.log('User logged in successfully', response);
        localStorage.setItem('token', response.token);
        

        console.log('isCovoitureur:', response.isCovoitureur);
        console.log('isAdmin:', response.isAdmin);

        if (response.isCovoitureur === true && response.isAdmin === false) {
          this.router.navigate(['/trajet']);  
        } else if (response.isCovoitureur === false && response.isAdmin === false) {
          this.router.navigate(['/list-trajet']);  
        } else {
          
          console.log('User is an Admin or other role');
        }
      },
      (error) => {
        console.error('Error logging in', error);
      }
    );
  }

  goToRegister() {
    this.router.navigate(['/register']); 
  }
 

}
