import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

//import{DinosaursComponent} from './dinosaurs.component'
import{DinosaurRoutingModule} from './dinosaur-routing.module';
//import { MessagesComponent } from './messages/messages.component'

@NgModule({
  imports: [
    CommonModule,
    DinosaurRoutingModule,
    TranslateModule
  ],
  declarations: [
    //DinosaursComponent
  //MessagesComponent
  ]
})
export class DinosaursModule { }
