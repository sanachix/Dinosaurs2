import { Component, OnInit } from '@angular/core';
import {Dinosaur} from './dinosaurs'
import { DINOS } from './mock-dinosaurs'; 

@Component({
  selector: 'app-dinosaurs',
  templateUrl: './dinosaurs.component.html',
  styleUrls: ['./dinosaurs.component.scss']
})
export class DinosaursComponent implements OnInit {
  dinos = DINOS;

  selectedDino: Dinosaur;

  constructor() { }

  ngOnInit() {
  }

  onSelect(d:Dinosaur):void{
    this.selectedDino = d;
  }

}
