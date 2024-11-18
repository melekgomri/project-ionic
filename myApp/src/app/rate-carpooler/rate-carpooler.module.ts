import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateCarpoolerPageRoutingModule } from './rate-carpooler-routing.module';

import { RateCarpoolerPage } from './rate-carpooler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RateCarpoolerPageRoutingModule
  ],
  declarations: [RateCarpoolerPage]
})
export class RateCarpoolerPageModule {}
