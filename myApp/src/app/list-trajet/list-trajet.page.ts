import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../trajet.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-list-trajet',
  templateUrl: './list-trajet.page.html',
  styleUrls: ['./list-trajet.page.scss'],
})
export class ListTrajetPage implements OnInit {
  trajets: any[]=[];
  filteredTrajets: any[] = [];
  name: string = '';
  lastName: string = ''
  userId: string = '';

  constructor(private  trajetService: TrajetService , private menuController: MenuController
    , private router : Router
  ) { }

  ngOnInit() {
    this.getalltrajets();
    this.name = localStorage.getItem('name') || '';
    this.lastName = localStorage.getItem('lastname') || '';
    this.userId = localStorage.getItem('id') ?? '';  

  }
  getalltrajets() {
    this.trajetService.getAlltrajet().subscribe(
      (data) => {
        this.trajets = data;
        console.log('trajet', this.trajets);
        this.filteredTrajets = [...this.trajets];
      },
      (error) => {
        console.log('error trajet', error);
      }
    );
  }
  
  filterTrajets(event: any) {
    const query = event.target.value.toLowerCase();
  
    if (query.trim() === '') {
      this.filteredTrajets = [...this.trajets]; 
    } else {
      this.filteredTrajets = this.trajets.filter(trajet => 
        trajet.from.toLowerCase().includes(query) || 
        trajet.to.toLowerCase().includes(query)
      );
    }
  }
  
  openMenu() {
    this.menuController.open();
  }
  closeMenu() {
    this.menuController.close();
  }

  logout() {
    // Clear user-related data from localStorage
    localStorage.removeItem('name');
    localStorage.removeItem('lastname');
    localStorage.removeItem('token');  
    localStorage.removeItem('id');  

    
 
    this.router.navigate(['/login']);
  }
}
