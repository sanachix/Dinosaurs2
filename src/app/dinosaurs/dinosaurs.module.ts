import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import{DinosaursComponent} from './dinosaurs.component'
import{DinosaurRoutingModule} from './dinosaur-routing.module';
import { AppComponent } from '@app/app.component';
import {DinosaurDetailComponent} from '../dinosaur-detail/dinosaur-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MessagesComponent } from './messages/messages.component'

@NgModule({
  imports: [
    CommonModule,
    DinosaurRoutingModule,
    TranslateModule,
    NgbModule
  ],
  declarations: [
    DinosaursComponent,
    DinosaurDetailComponent,
    MessagesComponent,
    
  ],

  bootstrap: [AppComponent]
})
export class DinosaursModule { }
