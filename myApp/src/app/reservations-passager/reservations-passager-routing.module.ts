import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationsPassagerPage } from './reservations-passager.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationsPassagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationsPassagerPageRoutingModule {}
