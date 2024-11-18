import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCovoitureursPage } from './list-covoitureurs.page';

const routes: Routes = [
  {
    path: '',
    component: ListCovoitureursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCovoitureursPageRoutingModule {}
