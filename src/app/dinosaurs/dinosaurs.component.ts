import { Component, OnInit } from '@angular/core';
import {Dinosaur} from './dinosaurs'
import { DINOS } from './mock-dinosaurs';
import {DinosaursService} from './dinosaurs.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap' 
//import {DinosaurDetailComponent} from '../dinosaur-detail/dinosaur-detail.component'

@Component({
  selector: 'app-dinosaurs',
  templateUrl: './dinosaurs.component.html',
  styleUrls: ['./dinosaurs.component.scss'],
  providers: [NgbRatingConfig]
})
export class DinosaursComponent implements OnInit {
  dinos: Dinosaur[];
  
  readonly= true;

  x='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD51qe04dODwa1JL637QthycJaeU3tU76U7U8pPwCVC-9TuSie'

  selectedDino: Dinosaur;

  constructor(private dinosaursService:DinosaursService,config:NgbRatingConfig) { 
    config.max = 250
  }

  getDinos():void{
   this.dinos=this.dinosaursService.getDinos()
  }

  ngOnInit() {
    this.getDinos();
  }

  onSelect(d:Dinosaur):void{
    this.selectedDino = d;
  }

}
