import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../trajet.service'; 
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-list-trajet-covoitureur',
  templateUrl: './list-trajet-covoitureur.page.html',
  styleUrls: ['./list-trajet-covoitureur.page.scss'],
})
export class ListTrajetCovoitureurPage implements OnInit {
  trajets: any[] = []; 
  reservations: any[] = [];
  covoitureurId : string | null = null;

  constructor(private trajetService: TrajetService ,
     private router: Router,
     private reservationService : ReservationService
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
  
}
