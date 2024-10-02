import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTrajetPage } from './list-trajet.page';

const routes: Routes = [
  {
    path: '',
    component: ListTrajetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTrajetPageRoutingModule {}
