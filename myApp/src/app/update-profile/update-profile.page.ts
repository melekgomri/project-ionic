import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
  userProfile: any = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    const userId = localStorage.getItem('id');
    if (userId) {
      this.authService.getUserById(userId).subscribe(
        (response) => {
          this.userProfile = response;
        },
        (error) => {
          console.error('Error fetching user profile:', error);
        }
      );
    }
  }

  updateProfile() {
    const userId = localStorage.getItem('id');
    if (userId) {
      this.authService.updateUserProfile(userId, this.userProfile).subscribe(
        async (response) => {
          await this.presentAlert('Succès', 'Profil mis à jour avec succès');
          this.router.navigate(['/list-trajet-covoitureur']); // Redirige vers la page précédente après mise à jour
        },
        async (error) => {
          console.error('Error updating profile:', error);
          await this.presentAlert('Erreur', 'Erreur lors de la mise à jour du profil');
        }
      );
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
