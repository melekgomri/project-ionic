import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilisteurListPageRoutingModule } from './utilisteur-list-routing.module';

import { UtilisteurListPage } from './utilisteur-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilisteurListPageRoutingModule
  ],
  declarations: [UtilisteurListPage]
})
export class UtilisteurListPageModule {}
