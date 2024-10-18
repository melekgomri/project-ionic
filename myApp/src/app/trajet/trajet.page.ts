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
    datedepart: '',
    placedisponible: '',
    cout: '',
    conducteur: ''
  };

  trajetId: string = '';

  constructor(private trajetService: TrajetService, private alertController: AlertController) {}

  async addTrajet() {
    // Retrieve 'conducteur' ID from localStorage
    const conducteurId = localStorage.getItem('id'); // Ensure 'id' is the key you used when storing it
    if (conducteurId) {
      this.trajet.conducteur = conducteurId; // Assign it to 'conducteur'
      
      // Now proceed with adding the trajet
      this.trajetService.addtrajet(this.trajet).subscribe(
        async (response) => {
          console.log('Trajet added:', response);
          await this.presentAlert('Succès', 'Le trajet a été ajouté avec succès !');
        },
        async (error) => {
          console.log('Error adding trajet:', error);
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
