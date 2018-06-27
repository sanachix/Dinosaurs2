import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinoPopUpComponent } from '@app/dinosaurs/dino-pop-up/dino-pop-up.component';

const routes: Routes = [
  { path: 'dino-pop-up', component: DinoPopUpComponent } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class DinoPopUpRouterModule { }
