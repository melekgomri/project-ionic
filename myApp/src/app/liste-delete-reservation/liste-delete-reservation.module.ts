import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeDeleteReservationPageRoutingModule } from './liste-delete-reservation-routing.module';

import { ListeDeleteReservationPage } from './liste-delete-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeDeleteReservationPageRoutingModule
  ],
  declarations: [ListeDeleteReservationPage]
})
export class ListeDeleteReservationPageModule {}
