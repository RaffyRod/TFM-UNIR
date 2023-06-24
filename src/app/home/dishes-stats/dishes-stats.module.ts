import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishesStatsPageRoutingModule } from './dishes-stats-routing.module';

import { DishesStatsPage } from './dishes-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DishesStatsPageRoutingModule
  ],
  declarations: [DishesStatsPage]
})
export class DishesStatsPageModule {}
