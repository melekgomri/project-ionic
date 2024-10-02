import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDeleteReservationPage } from './add-delete-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: AddDeleteReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDeleteReservationPageRoutingModule {}
