import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{DinosaursComponent} from './dinosaurs.component'
import{DinosaurRoutingModule} from './dinosaur-routing.module'

@NgModule({
  imports: [
    CommonModule,
    DinosaurRoutingModule
  ],
  declarations: [
    DinosaursComponent
  ]
})
export class DinosaursModule { }
