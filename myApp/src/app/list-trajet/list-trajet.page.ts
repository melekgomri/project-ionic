import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../trajet.service';

@Component({
  selector: 'app-list-trajet',
  templateUrl: './list-trajet.page.html',
  styleUrls: ['./list-trajet.page.scss'],
})
export class ListTrajetPage implements OnInit {
  trajets: any[]=[];
  filteredTrajets: any[] = [];
  constructor(private  trajetService: TrajetService) { }

  ngOnInit() {
    this.getalltrajets();
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
        trajet.place.toLowerCase().includes(query)
      );
    }
  }

}
