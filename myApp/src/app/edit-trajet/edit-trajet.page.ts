import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrajetService } from '../trajet.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-trajet',
  templateUrl: './edit-trajet.page.html',
  styleUrls: ['./edit-trajet.page.scss'],
})
export class EditTrajetPage implements OnInit {
  trajetId: string = '';
  trajet: any;
  updatedTrajet: any = {};  // This will hold updated data

  constructor(
    private route: ActivatedRoute,
    private trajetService: TrajetService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Get the trajet ID from NavController state
    if (history.state && history.state.id) {
      this.trajetId = history.state.id;
      console.log("Trajet ID from state:", this.trajetId);
  
      // Fetch the data for the trajet to be updated
      this.getTrajetData();
    } else {
      console.error("No trajet ID found in state.");
    }
  }
  

  getTrajetData() {
   
    this.trajetService.getTrajetsById(this.trajetId).subscribe((data) => {
      if (data) {
        this.trajet = data;  
        console.log(this.trajet); 
       
        this.updatedTrajet = { ...this.trajet };  
      } else {
        console.error("No trajet data found");
      }
    });
  }

  updateTrajet() {
    if (!this.trajet || !this.trajet._id) {
      console.error("Invalid trajet data: Trajet ID is missing.");
      return;
    }

    const trajetIdToUpdate = this.trajet._id;  // Ensure we're using the trajet's actual ID
    
    // Call the API to update the trajet using the correct ID and the updated data
    this.trajetService.updatetrajet(trajetIdToUpdate, this.updatedTrajet).subscribe({
      next: (response) => {
        console.log('Trajet updated successfully:', response);
        this.navCtrl.back();
      },
      error: (error) => {
        console.error('Error updating trajet:', error);
      },
    });
  }
}
