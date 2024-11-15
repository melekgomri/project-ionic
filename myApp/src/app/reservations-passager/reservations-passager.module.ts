import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationsPassagerPageRoutingModule } from './reservations-passager-routing.module';

import { ReservationsPassagerPage } from './reservations-passager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationsPassagerPageRoutingModule
  ],
  declarations: [ReservationsPassagerPage]
})
export class ReservationsPassagerPageModule {}
