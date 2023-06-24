import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishesFinderPageRoutingModule } from './dishes-finder-routing.module';

import { DishesFinderPage } from './dishes-finder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DishesFinderPageRoutingModule
  ],
  declarations: [DishesFinderPage]
})
export class DishesFinderPageModule {}
