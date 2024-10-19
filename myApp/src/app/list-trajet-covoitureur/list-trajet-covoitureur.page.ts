import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../trajet.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-list-trajet-covoitureur',
  templateUrl: './list-trajet-covoitureur.page.html',
  styleUrls: ['./list-trajet-covoitureur.page.scss'],
})
export class ListTrajetCovoitureurPage implements OnInit {
  trajets: any[] = []; 

  constructor(private trajetService: TrajetService , private router: Router) { }

  ngOnInit() {
    this.getTrajets(); 
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
}
