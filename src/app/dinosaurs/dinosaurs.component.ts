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
  

  selectedDino: Dinosaur;

  constructor(private dinosaursService:DinosaursService,config:NgbRatingConfig) { 
    config.max = 250
  }

  getDinos():void{
   this.dinosaursService.getDinos().
   subscribe(dinos => this.dinos = dinos)

  }

  ngOnInit() {
    this.getDinos();
  }

  onSelect(d:Dinosaur):void{
    this.selectedDino = d;
  }

}
