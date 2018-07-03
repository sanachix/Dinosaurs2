import { Component, OnInit, Input } from '@angular/core';
import {Dinosaur} from '../dinosaurs/dinosaurs'
//import{DinosaursComponent} from '../dinosaurs/dinosaurs.component'

@Component({
  selector: 'app-dinosaur-detail',
  templateUrl: './dinosaur-detail.component.html',
  styleUrls: ['./dinosaur-detail.component.scss']
})
export class DinosaurDetailComponent implements OnInit {

  readonly= true;
  @Input() d: Dinosaur;

  constructor() { }

  ngOnInit() {
  }

}
