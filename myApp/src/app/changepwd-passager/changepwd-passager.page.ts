import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UtilisateurService } from '../utilisateur.service';
@Component({
  selector: 'app-changepwd-passager',
  templateUrl: './changepwd-passager.page.html',
  styleUrls: ['./changepwd-passager.page.scss'],
})
export class ChangepwdPassagerPage implements OnInit {
  oldPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';
  constructor( private alertController: AlertController,

    private userSer : UtilisateurService,) { }

  ngOnInit() {
  }
  async saveNewPassword() {
    // Validate form inputs
    if (!this.oldPassword || !this.newPassword || !this.confirmNewPassword) {
      this.showAlert('Error', 'All password fields are required.');
      return;
    }
  
    if (this.newPassword !== this.confirmNewPassword) {
      this.showAlert('Error', 'New password and confirm password do not match.');
      return;
    }
  
    // Prepare data for API call
    const passwordData = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      confirmNewPassword: this.confirmNewPassword,
    };
    
    console.log('Password Data:', passwordData);
  
    // Get user ID from localStorage
    const userId = localStorage.getItem('id') || ''; 
    if (!userId) {
      await this.showAlert('Error', 'User is not authenticated.');
      return;
    }
  
    console.log('User ID:', userId);
  
    // Call the changePwd function from your service
    this.userSer.changePwd(userId, passwordData).subscribe({
      next: async (response) => {
        // Handle successful password change
        console.log('Password change response:', response);
        await this.showAlert('Success', 'Password updated successfully.');
        this.resetPasswordFields();
      },
      error: async (error) => {
        console.error('Password change error:', error);  // Log full error object
        const errorMessage = error?.error?.message || 'Password change failed.';
        await this.showAlert('Error', errorMessage);
      },
    });
  }
  
  resetPasswordFields() {
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
  //  this.showChangePassword = false;
  }
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
