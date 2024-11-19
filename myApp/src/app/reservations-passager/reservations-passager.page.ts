import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
@Component({
  selector: 'app-reservations-passager',
  templateUrl: './reservations-passager.page.html',
  styleUrls: ['./reservations-passager.page.scss'],
})
export class ReservationsPassagerPage implements OnInit {
  reservations : any []=[];
  passagerId : string = '';
  constructor(private reservationService : ReservationService,
    private alertController: AlertController,
    private location: Location
  ) { }

  ngOnInit() {
   
    this.passagerId = localStorage.getItem('id') || '';
    this.loadReservations();
    
  }
  loadReservations() {
    if (this.passagerId) {
      console.log('Fetching reservations for passager ID:', this.passagerId);
      this.reservationService.getReservationsByPassagerId(this.passagerId).subscribe(
        (data) => {
          this.reservations = data; // Store fetched reservations
          console.log('Fetched reservations:', this.reservations); // Check the data
        },
        (error) => {
          console.error('Error fetching reservations', error);
        }
      );
    } else {
      console.error('No covoitureur ID found in local storage.');
    }
  }


  resetStatus(reservationId: string) {
    // Récupérer l'ID de l'utilisateur depuis localStorage
    const userId = localStorage.getItem('id'); 
  
    // Trouver la réservation dans votre liste
    const reservation = this.reservations.find((r) => r._id === reservationId);
  
    // Vérifier si l'utilisateur est le passager ou le covoitureur
    if (reservation && userId) {
      if (reservation.passager._id === userId) {
        // Si l'utilisateur est le passager,  marquer l'annulation par le passager
        reservation.annulee = true;
        reservation.cancelled = true;
        reservation.confirmed = false; // Réinitialiser le statut confirmé
  
        // Si l'utilisateur est le covoitureur, marquez l'annulation par le covoitureur
      } else if (reservation.covoitureur._id === userId) {
        reservation.annulee = true;
        reservation.cancelled = true;
        reservation.confirmed = false; // Réinitialiser le statut confirmé
      }
  
      // Maintenant, faites la requête pour annuler la réservation
      this.reservationService.annulationReservation(reservationId).subscribe(
        (response) => {
          console.log('Réservation annulée:', response);
        },
        (error) => {
          console.error('Erreur lors de l\'annulation:', error);
        }
      );
    }
  }
  
  async showCancelAlert(reservationId: string) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
message: 'Are you sure you want to cancel this action?',

      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Annulation de l\'action');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.resetStatus(reservationId);
            window.location.reload();          }
        }
      ]
    });

    await alert.present();
  }

}
