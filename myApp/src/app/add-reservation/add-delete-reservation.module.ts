import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDeleteReservationPageRoutingModule } from './add-delete-reservation-routing.module';

import { AddDeleteReservationPage } from './add-delete-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDeleteReservationPageRoutingModule
  ],
  declarations: [AddDeleteReservationPage]
})
export class AddDeleteReservationPageModule {}
