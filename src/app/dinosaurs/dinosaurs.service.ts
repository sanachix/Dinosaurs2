import { Injectable } from '@angular/core';
import {Dinosaur} from './dinosaurs';
import {DINOS} from './mock-dinosaurs';
import {Observable, of} from 'rxjs' //would use but I do not have a server to take from
import {MessagesService} from './messages/messages.service';
import form from 'devextreme/ui/form';

let dinosaurs:Dinosaur[]=DINOS; 


@Injectable({
  providedIn: 'root'
})
export class DinosaursService {

  getDinos():Observable<Dinosaur[]> {
    this.messageService.add('DinosaursService:fetched dinos')
    return of  (DINOS)
  }

  getDino():Dinosaur[]{
    return dinosaurs
  }


  constructor(private messageService: MessagesService) { }
}
