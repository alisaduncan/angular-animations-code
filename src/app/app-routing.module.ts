import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: {routeAnimation: 1 }},
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes-group', component: HeroesComponent, data: {routeAnimation: 2 }},
  { path: 'heroes-stagger', component: HeroesComponent, data: {routeAnimation: 3 }}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
