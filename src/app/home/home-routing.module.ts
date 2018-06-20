import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { HomeComponent } from './home.component';
//import { DinosaursComponent } from '../dinosaurs/dinosaurs.component';


const routes: Routes = [
  //{ path: 'dinosaurs', component: DinosaursComponent},
  Route.withShell([
    //{ path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: extract('Home') } },
    
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
