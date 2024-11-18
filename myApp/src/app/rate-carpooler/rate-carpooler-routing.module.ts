import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateCarpoolerPage } from './rate-carpooler.page';

const routes: Routes = [
  {
    path: '',
    component: RateCarpoolerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateCarpoolerPageRoutingModule {}
