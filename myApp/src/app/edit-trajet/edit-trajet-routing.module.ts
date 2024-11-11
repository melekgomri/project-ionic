import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTrajetPage } from './edit-trajet.page';

const routes: Routes = [
  {
    path: '',
    component: EditTrajetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTrajetPageRoutingModule {}
