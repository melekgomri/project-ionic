import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePassagerPageRoutingModule } from './profile-passager-routing.module';

import { ProfilePassagerPage } from './profile-passager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePassagerPageRoutingModule
  ],
  declarations: [ProfilePassagerPage]
})
export class ProfilePassagerPageModule {}
