import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTrajetPageRoutingModule } from './edit-trajet-routing.module';

import { EditTrajetPage } from './edit-trajet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTrajetPageRoutingModule
  ],
  declarations: [EditTrajetPage]
})
export class EditTrajetPageModule {}
