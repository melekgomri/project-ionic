import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-delete-reservation',
  templateUrl: './add-delete-reservation.page.html',
  styleUrls: ['./add-delete-reservation.page.scss'],
})
export class AddDeleteReservationPage implements OnInit {

  reservationData = {
    date: '',
    passager: '',
    trajet: '',
    confirmed: false,
    cancelled: false
  };

  // Liste des réservations
  reservations: any[] = [];

  constructor(
    private reservationService: ReservationService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Charger les réservations au démarrage de la page
    this.loadReservations();
  }

  // Fonction pour charger les réservations
  loadReservations() {
    this.reservationService.getreservation().subscribe(
      (data) => {
        this.reservations = data;
      },
      (error) => {
        console.log('Error loading reservations:', error);
      }
    );
  }

  // Fonction pour ajouter une réservation
  addReservation() {
    this.reservationService.addreservation(this.reservationData).subscribe(
      (response) => {
        console.log('Reservation added:', response);
        this.loadReservations();  // Recharger les réservations après ajout
      },
      (error) => {
        console.log('Error adding reservation:', error);
      }
    );
  }

  // Fonction pour supprimer une réservation
  deleteReservation(id: string) {
    this.reservationService.deletereservation(id).subscribe(
      (response) => {
        console.log('Reservation deleted:', response);
        this.loadReservations();  // Recharger les réservations après suppression
      },
      (error) => {
        console.log('Error deleting reservation:', error);
      }
    );
  }

}
