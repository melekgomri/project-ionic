import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCovoitureursPageRoutingModule } from './list-covoitureurs-routing.module';

import { ListCovoitureursPage } from './list-covoitureurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCovoitureursPageRoutingModule
  ],
  declarations: [ListCovoitureursPage]
})
export class ListCovoitureursPageModule {}
