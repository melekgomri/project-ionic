import { Component } from '@angular/core';
import { TrajetService } from '../trajet.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.page.html',
  styleUrls: ['./trajet.page.scss'],
})
export class TrajetPage {

  trajet = {
    from: '',
    to: '',
    depart: '',  // Changed to store time as a string (e.g., "14:30")
    datedapart: '',
    placedisponible: '',
    cout: '',
    conducteur: ''
  };

 // selectedDate: string;

  constructor(private trajetService: TrajetService, private alertController: AlertController) {
   // this.selectedDate = new Date().toISOString().split('T')[0];
   const today = new Date();
    this.trajet.datedapart = today.toISOString().split('T')[0];
  }

  onDateChange(event: any) {
    this.trajet.datedapart = event.detail.value;
  }

  onTimeChange(event: any) {
    const timeString = event.detail.value;  // Extract the time string in "HH:mm" format
    this.trajet.depart = timeString;  // Store as string, or you could use a Date object if needed
    console.log('Time selected:', this.trajet.depart);  // For debugging
  }

  async addTrajet() {
    const conducteurId = localStorage.getItem('id');
    if (conducteurId) {
      this.trajet.conducteur = conducteurId;
  
      // Ensure the date format is set correctly
      // if (this.selectedDate) {
      //   this.trajet.datedapart = this.selectedDate;
      // }
  
      // If the database expects Date objects for both date and time:
      if (this.trajet.depart) {
        const [hours, minutes] = this.trajet.depart.split(':');
        const dateObj = new Date(this.trajet.datedapart);  // Start with the date selected
        dateObj.setHours(Number(hours), Number(minutes));  // Set the time based on the input
        this.trajet.datedapart = dateObj.toISOString();  // Combine date and time in a single Date object
      }
  
      this.trajetService.addtrajet(this.trajet).subscribe(
        async (response) => {
          console.log('Trajet added:', response);
          await this.presentAlert('Succès', 'Le trajet a été ajouté avec succès !');
        },
        async (error) => {
          console.error('Error adding trajet:', error);
          await this.presentAlert('Erreur', 'Une erreur est survenue lors de l\'ajout du trajet.');
        }
      );
    } else {
      console.error('No conducteur ID found in localStorage');
      await this.presentAlert('Erreur', 'Conducteur non trouvé dans localStorage.');
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
