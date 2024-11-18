import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-list-covoitureurs',
  templateUrl: './list-covoitureurs.page.html',
  styleUrls: ['./list-covoitureurs.page.scss'],
})
export class ListCovoitureursPage implements OnInit {
  carpoolers: any[] = [];
  filteredCarpoolers: any[] = [];
  constructor(private userService : UtilisateurService) { }

  ngOnInit() {
    this.fetchCarpoolers();
  }


  fetchCarpoolers() {
    this.userService.allCarpoolers().subscribe({
      next: (data) => {
        this.carpoolers = data;  // Store the carpoolers data
        console.log('Carpoolers:', this.carpoolers);  // Log the fetched data
        this.filteredCarpoolers = data;  // Initially show all carpoolers
      },
      error: (err) => {
        console.error('Error fetching carpoolers:', err);
      },
    });
  }
  

  filterCarpoolers(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    if (!searchTerm.trim()) {
      // If no search term, show all carpoolers
      this.filteredCarpoolers = this.carpoolers;
    } else {
      // Filter by name and lastname
      this.filteredCarpoolers = this.carpoolers.filter(carpooler => 
        carpooler.name.toLowerCase().includes(searchTerm) || 
        carpooler.lastname.toLowerCase().includes(searchTerm)
      );
    }
  }

}
