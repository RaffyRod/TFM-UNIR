import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishesFinderPageRoutingModule } from './dishes-finder-routing.module';

import { DishesFinderPage } from './dishes-finder.page';

import { PlateFormComponent } from '../plate-form/plate-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DishesFinderPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DishesFinderPage,
    PlateFormComponent
  ]
})
export class DishesFinderPageModule {}
