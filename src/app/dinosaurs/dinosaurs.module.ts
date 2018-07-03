import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import{DinosaursComponent} from './dinosaurs.component'
import{DinosaurRoutingModule} from './dinosaur-routing.module';
import { AppComponent } from '@app/app.component';
import {DinosaurDetailComponent} from '../dinosaur-detail/dinosaur-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MessagesComponent } from './messages/messages.component';
import { DinoPopUpModule } from '@app/dinosaurs/dino-pop-up/dino-pop-up.module';
import { DinoFromModule } from '@app/dinosaurs/dino-form/dino-from.module';
//import { DinoPopUpComponent } from '@app/dinosaurs/dino-pop-up/dino-pop-up.component';
//import { DinoFormComponent } from './dino-form/dino-form.component';


@NgModule({
  imports: [
    CommonModule,
    DinosaurRoutingModule,
    TranslateModule,
    NgbModule,
    DinoPopUpModule,
    DinoFromModule
  
    
  ],
  declarations: [
    DinosaursComponent,
    DinosaurDetailComponent,
    MessagesComponent,
   

    
  ],

  bootstrap: [AppComponent]
})
export class DinosaursModule { }
