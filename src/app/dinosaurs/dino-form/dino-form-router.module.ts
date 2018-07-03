import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinoFormComponent } from '@app/dinosaurs/dino-form/dino-form.component';


const routes: Routes = [
  { path: 'dino-form', component: DinoFormComponent } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class DinoFormRouterModule { }
