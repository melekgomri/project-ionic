import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { UtilisateurService } from '../utilisateur.service';  // Import your service
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-passager',
  templateUrl: './profile-passager.page.html',
  styleUrls: ['./profile-passager.page.scss'],
})
export class ProfilePassagerPage implements OnInit {
  userProfile: any = {};  // Initialize userProfile object
  userId: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController,
    private userSer: UtilisateurService  // Inject UtilisateurService
  ) {}

  ngOnInit() {
    // Get the userId from localStorage
    this.userId = localStorage.getItem('id') ?? '';

    // Fetch the user profile by ID if the ID exists
    if (this.userId) {
      this.getUserProfileById(this.userId);
    } else {
      console.error('User ID not found in localStorage');
    }
  }

  // Method to fetch the user profile by ID
  getUserProfileById(id: string) {
    this.authService.getUserById(id).subscribe(
      (data) => {
        // Handle successful response and assign the user data
        this.userProfile = data;
        console.log('User Profile:', this.userProfile);  // Log to verify data
      },
      (error) => {
        // Handle error case
        console.error('Error fetching user profile:', error);
        this.presentAlert('Error', 'Could not fetch user profile. Please try again.');
      }
    );
  }
  updateUserProfile() {
    const userId = localStorage.getItem('id');
    if (userId) {
      this.authService.updateUserProfile(userId, this.userProfile).subscribe(
        async (response) => {
          localStorage.setItem('name', this.userProfile.name);       // Update name
          localStorage.setItem('lastname', this.userProfile.lastname);
          await this.presentAlert('Succès', 'Profile updated successfully');
        },
        async (error) => {
          console.error('Error updating profile:', error);
          await this.presentAlert('Erreur', 'Error updating profile');
        }
      );
    }
  }

  // Display alert in case of an error
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
