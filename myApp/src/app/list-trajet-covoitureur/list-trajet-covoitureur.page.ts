import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../trajet.service'; 
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router'; 
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-list-trajet-covoitureur',
  templateUrl: './list-trajet-covoitureur.page.html',
  styleUrls: ['./list-trajet-covoitureur.page.scss'],
})
export class ListTrajetCovoitureurPage implements OnInit {
  trajets: any[] = []; 
  reservations: any[] = [];
  covoitureurId : string | null = null;
  reservationStatus: string = '';

  constructor(private trajetService: TrajetService ,
     private router: Router,
     private reservationService : ReservationService,
     private alertController: AlertController
    ) { }

  ngOnInit() {
    this.covoitureurId = localStorage.getItem('id');
    this.getTrajets(); 
    this.loadReservations();

  }

  getTrajets() {
    // Get user ID from local storage
    const userId = localStorage.getItem('id'); 

    if (userId) {
      this.trajetService.getTrajetsByUserId(userId).subscribe(
        (response) => {
          this.trajets = response; 
          console.log('Trajets for user:', this.trajets); 
        },
        (error) => {
          console.error('Error fetching trajets:', error); 
        }
      );
    } else {
      console.error('No user ID found in local storage.'); 
    }
  }

  navigateToAddTrajetPage() {
    this.router.navigate(['/trajet']); 
  }

  loadReservations() {
    if (this.covoitureurId) {
      console.log('Fetching reservations for covoitureur ID:', this.covoitureurId);
      this.reservationService.getReservationByCovoitureurId(this.covoitureurId).subscribe(
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


  deleteTrajet(trajet: any): void {
    const trajetId = trajet._id;
    console.log('Deleting trajet with id:', trajetId);
  
    if (!trajetId) {
      console.error('No valid trajet id provided');
      return; // Exit if no valid id
    }
  
    this.trajetService.deletetrajet(trajetId).subscribe(
      (response) => {
        // Handle successful deletion
        console.log('Trajet deleted successfully', response);
        
        // Remove the deleted trajet from the list immediately
        this.trajets = this.trajets.filter(t => t._id !== trajetId); // Update the list
        this.loadReservations();
      },
      (error) => {
        // Handle error
        console.error('Error deleting trajet', error);
      }
    );
  }
  cancelReservation(id: string) {
    this.reservationService.cancelReservation(id).subscribe(
      async (response) => {
        console.log('Reservation canceled:', response);
        this.reservationStatus = 'rejected';
        await this.presentAlert('Succès', 'La réservation a été annulée avec succès !');
      },
      async (error) => {
        console.error('Error canceling reservation:', error);
        await this.presentAlert('Erreur', 'Une erreur est survenue lors de l\'annulation de la réservation.');
      }
    );
  }

  // Method to handle reservation confirmation
confirmReservation(id: string) {
  this.reservationService.confirmReservation(id).subscribe(
    async (response) => {
      console.log('Reservation confirmed:', response);
      this.reservationStatus = 'confirmed';
      await this.presentAlert('Succès', 'La réservation a été confirmée avec succès !');
      // Optionally, update the UI to reflect the new available places
      this.getTrajets()
    },
    async (error) => {
      console.error('Error confirming reservation:', error);
      await this.presentAlert('Erreur', 'Une erreur est survenue lors de la confirmation de la réservation.');
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

  
  
}
