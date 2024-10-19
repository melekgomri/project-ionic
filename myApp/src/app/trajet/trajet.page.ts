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
    place: '',
    depart: '',
    arrive: '',
    datedapart: new Date(),  // Initialize as Date object
    placedisponible: '',
    cout: '',
    conducteur: ''
  };

  selectedDate: string;  // Declare selectedDate as a string

  constructor(private trajetService: TrajetService, private alertController: AlertController) {
    this.selectedDate = new Date().toISOString();
  }

  onDateChange(event: any) {
    this.trajet.datedapart = new Date(event.detail.value);  // Convert to Date object
  }

  async addTrajet() {
    const conducteurId = localStorage.getItem('id');
    if (conducteurId) {
      this.trajet.conducteur = conducteurId;
      console.log('Trajet Date:', this.trajet.datedapart); 
      this.trajet.datedapart = new Date(this.selectedDate); // Should be a Date object

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
