import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePassagerPage } from './profile-passager.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePassagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePassagerPageRoutingModule {}
