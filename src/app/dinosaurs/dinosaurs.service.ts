import { Injectable } from '@angular/core';
import {Dinosaur} from './dinosaurs';
import {DINOS} from './mock-dinosaurs';
//import {Observable} from 'rxjs' would use but I do not have aserver to take from
import {MessagesService} from './messages/messages.service';

let dinosaurs:Dinosaur[]=DINOS; 

@Injectable({
  providedIn: 'root'
})
export class DinosaursService {

  getDinos():Dinosaur[] {
    this.messageService.add('DinosaursService:fetched dinos')
    return DINOS
  }

  getDino():Dinosaur[]{
    return dinosaurs
  }
  constructor(private messageService: MessagesService) { }
}
