import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTrajetCovoitureurPageRoutingModule } from './list-trajet-covoitureur-routing.module';

import { ListTrajetCovoitureurPage } from './list-trajet-covoitureur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTrajetCovoitureurPageRoutingModule
  ],
  declarations: [ListTrajetCovoitureurPage]
})
export class ListTrajetCovoitureurPageModule {}
