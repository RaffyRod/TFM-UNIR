import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishesFinderPage } from './dishes-finder.page';

const routes: Routes = [
  {
    path: '',
    component: DishesFinderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishesFinderPageRoutingModule {}
