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
      password:'',
      phone:'',
     // isAdmin: false,
      isCovoitureur: false
    };

    constructor(private authservice: AuthService,private route: Router) { }

    register() {
      this.authservice.register(this.userdata).subscribe(
        (response) => {
          console.log('User registered successfully', response);
          this.route.navigate(['/login']);
        },
        (error) => {
          console.error('Error registering user', error);
        }
      );
    }
    goToLogin() {
      this.route.navigate(['/login']); // Redirect to the login page
    }
  }
