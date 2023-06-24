import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishesStatsPage } from './dishes-stats.page';

const routes: Routes = [
  {
    path: '',
    component: DishesStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishesStatsPageRoutingModule {}
