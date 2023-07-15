import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./dishes-stats/dishes-stats.module').then( m => m.DishesStatsPageModule)
      },
      {
        path: 'dishes-stats',
        loadChildren: () => import('./dishes-stats/dishes-stats.module').then( m => m.DishesStatsPageModule)
      },
      {
        path: 'dishes-finder',
        loadChildren: () => import('./dishes-finder/dishes-finder.module').then( m => m.DishesFinderPageModule)
      },
      {
        path: 'user-preference',
        loadChildren: () => import('./user-preference/user-preference.module').then( m => m.UserPreferencePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
