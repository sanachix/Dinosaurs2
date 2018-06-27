import { Component, OnInit } from '@angular/core';
import { Dinosaur } from '@app/dinosaurs/dinosaurs';
import { DinosaursService } from '@app/dinosaurs/dinosaurs.service';


@Component({
  selector: 'app-dino-pop-up',
  templateUrl: './dino-pop-up.component.html',
  styleUrls: ['./dino-pop-up.component.scss']
})
export class DinoPopUpComponent implements OnInit {
  
  currentDino: Dinosaur= new Dinosaur();
  dinosaurs:Dinosaur[];
  popupVisible= false;
  showCloseButton = true;
 

  constructor(service:DinosaursService) {
    this.dinosaurs=service.getDino();
   }

   showInfo(dinosaur:any){
     this.currentDino=dinosaur;
     this.popupVisible =true;
   }

  ngOnInit() {
  }

}
