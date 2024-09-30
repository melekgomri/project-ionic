import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../trajet.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.page.html',
  styleUrls: ['./trajet.page.scss'],
})
export class TrajetPage  {

  trajet = {
    place: '',
    depart: '',
    arrive: '',
    datedepart: '',
    placedisponible:'',
    cout:'',
    conducteur:''
  };

  trajetId: string = '';


  constructor(private trajetservice: TrajetService, private alertController: AlertController) {}

  async addTrajet() {
    this.trajetservice.addtrajet(this.trajet).subscribe(
      async (response) => {
        console.log('Trajet added:', response);
        await this.presentAlert('Succès', 'Le trajet a été ajouté avec succès !'); // Appel de la fonction d'alerte
      },
      async (error) => {
        console.log('Error adding trajet:', error);
        await this.presentAlert('Erreur', 'Une erreur est survenue lors de l\'ajout du trajet.');
      }
    );
  }
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  updateTrajet() {
    this.trajetservice.updatetrajet(this.trajetId, this.trajet).subscribe(
      (response) => {
        console.log('Trajet updated:', response);
        // Afficher un message de succès ou rediriger après la mise à jour
      },
      (error) => {
        console.log('Error updating trajet:', error);
        // Gérer l'erreur
      }
    );
  }
  deleteTrajet() {
    this.trajetservice.deletetrajet(this.trajetId).subscribe(
      (response) => {
        console.log('Trajet deleted:', response);
        // Afficher un message de succès ou rediriger après la suppression
      },
      (error) => {
        console.log('Error deleting trajet:', error);
        // Gérer l'erreur
      }
    );
  }
}
