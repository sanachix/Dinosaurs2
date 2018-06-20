import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DinosaursComponent } from './dinosaurs.component';

import { Route, extract } from '@app/core';
const routes: Routes = [
  
  Route.withShell([
    { path: 'dinosaurs', component: DinosaursComponent, data: { title: extract('Dinosaurs') } }
  ])
 
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class DinosaurRoutingModule { }
