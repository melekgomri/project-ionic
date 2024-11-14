import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangepwdPassagerPage } from './changepwd-passager.page';

const routes: Routes = [
  {
    path: '',
    component: ChangepwdPassagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangepwdPassagerPageRoutingModule {}
