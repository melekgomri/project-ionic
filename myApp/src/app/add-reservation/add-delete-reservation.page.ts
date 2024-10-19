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
import { TrajetService } from '../trajet.service'

@Component({
  selector: 'app-add-delete-reservation',
  templateUrl: './add-delete-reservation.page.html',
  styleUrls: ['./add-delete-reservation.page.scss'],
})
export class AddDeleteReservationPage implements OnInit {
  trajet: any; // To store trajet details

  constructor(private route: ActivatedRoute, private trajetService: TrajetService) { }

  ngOnInit() {
    // Grab the 'id' from the route parameters
    this.route.paramMap.subscribe(params => {
      const trajetId = params.get('id');
      
      if (trajetId) {
        this.loadTrajetDetails(trajetId); // Load trajet details using the ID
      }
    });
  }

  // Fetch trajet details by ID using the service
  loadTrajetDetails(id: string) {
    this.trajetService.getTrajetsById(id).subscribe(trajetDetails => {
      this.trajet = trajetDetails;
    }, error => {
      console.error('Error fetching trajet details', error);
    });
  }
}

