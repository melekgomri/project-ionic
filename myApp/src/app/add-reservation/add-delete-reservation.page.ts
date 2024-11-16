// import { Component, OnInit } from '@angular/core';
// import { ReservationService } from '../reservation.service';
// import { NavController } from '@ionic/angular';

// @Component({
//   selector: 'app-add-delete-reservation',
//   templateUrl: './add-delete-reservation.page.html',
//   styleUrls: ['./add-delete-reservation.page.scss'],
// })
// export class AddDeleteReservationPage implements OnInit {

//   reservationData = {
//     date: '',
//     passager: '',
//     trajet: '',
//     confirmed: false,
//     cancelled: false
//   };

//   // Liste des réservations
//   reservations: any[] = [];

//   constructor(
//     private reservationService: ReservationService,
//     private navCtrl: NavController
//   ) {}

//   ngOnInit() {
//     // Charger les réservations au démarrage de la page
//     this.loadReservations();
//   }

//   // Fonction pour charger les réservations
//   loadReservations() {
//     this.reservationService.getreservation().subscribe(
//       (data) => {
//         this.reservations = data;
//       },
//       (error) => {
//         console.log('Error loading reservations:', error);
//       }
//     );
//   }

//   // Fonction pour ajouter une réservation
//   addReservation() {
//     this.reservationService.addreservation(this.reservationData).subscribe(
//       (response) => {
//         console.log('Reservation added:', response);
//         this.loadReservations();  // Recharger les réservations après ajout
//       },
//       (error) => {
//         console.log('Error adding reservation:', error);
//       }
//     );
//   }

//   // Fonction pour supprimer une réservation
//   deleteReservation(id: string) {
//     this.reservationService.deletereservation(id).subscribe(
//       (response) => {
//         console.log('Reservation deleted:', response);
//         this.loadReservations();  // Recharger les réservations après suppression
//       },
//       (error) => {
//         console.log('Error deleting reservation:', error);
//       }
//     );
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrajetService } from '../trajet.service';
import { ReservationService } from '../reservation.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-delete-reservation',
  templateUrl: './add-delete-reservation.page.html',
  styleUrls: ['./add-delete-reservation.page.scss'],
})
export class AddDeleteReservationPage implements OnInit {
  trajet: any; // To store trajet details
  reservationData = {
    date: '',
    passager: '', // Will be set from local storage
    trajet: '',
    covoitureur: '',   
    confirmed: false,
    cancelled: false,
  };

  constructor(
    private route: ActivatedRoute,
    private trajetService: TrajetService,
    private reservationService: ReservationService,
    private alertController: AlertController // Inject AlertController
  ) {}

  ngOnInit() {
    // Grab the 'id' from the route parameters
    this.route.paramMap.subscribe((params) => {
      const trajetId = params.get('id');

      if (trajetId) {
        this.loadTrajetDetails(trajetId); // Load trajet details using the ID
      }
    });
  }
  getPassengerId() {
    // Retrieve passenger ID from local storage
     const passagerId = localStorage.getItem('id') || '';
     return passagerId; // Adjust this key as per your local storage implementation
  }
  // Fetch trajet details by ID using the service
  loadTrajetDetails(id: string) {
    this.trajetService.getTrajetsById(id).subscribe(
      (trajetDetails) => {
        this.trajet = trajetDetails;
        this.reservationData.trajet = trajetDetails._id; // Set the trajet ID for the reservation
        this.reservationData.date = trajetDetails.datedapart; // Set the date from trajet details
        this.reservationData.passager = localStorage.getItem('passagerId') || ''; // Get passenger ID from local storage
        this.reservationData.covoitureur = trajetDetails.conducteur?._id || '';
      },
      (error) => {
        console.error('Error fetching trajet details', error);
      }
    );
  }

  addReservation() {
    if (this.trajet && this.trajet.placedisponible === 0) {
      this.presentAlert('No Available Places', 'There are no available seats for this trip.');
      return; // Stop the execution if no places are available
    }
    this.reservationData.passager = this.getPassengerId();
    this.reservationService.addreservation(this.reservationData).subscribe(
      async (response) => {
        console.log('Reservation added:', response);
        await this.presentAlert('Reservation Added', 'Your reservation has been successfully added.');
        this.resetReservationData(); // Reset reservation data after successful addition
      },
      (error) => {
        console.log('Error adding reservation:', error);
        this.presentAlert('Error', 'There was an error adding your reservation. Please try again.');
      }
    );
  }

  // Function to display alerts
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Reset reservation data
  resetReservationData() {
    this.reservationData = {
      date: '',
      passager: localStorage.getItem('passagerId') || '', // Ensure passenger ID is still in place
      trajet: '',
      covoitureur: '',
      confirmed: false,
      cancelled: false,
    };
  }
}


