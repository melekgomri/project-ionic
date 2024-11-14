import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangepwdPassagerPageRoutingModule } from './changepwd-passager-routing.module';

import { ChangepwdPassagerPage } from './changepwd-passager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangepwdPassagerPageRoutingModule
  ],
  declarations: [ChangepwdPassagerPage]
})
export class ChangepwdPassagerPageModule {}
