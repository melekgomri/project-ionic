import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeDeleteReservationPage } from './liste-delete-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: ListeDeleteReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeDeleteReservationPageRoutingModule {}
