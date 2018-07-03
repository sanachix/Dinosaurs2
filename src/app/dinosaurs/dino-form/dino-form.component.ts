import { Component, OnInit, ViewChild } from '@angular/core';
//import { enableProdMode} from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { DinosaursService } from '@app/dinosaurs/dinosaurs.service';
import { Dinosaur } from '@app/dinosaurs/dinosaurs';
import { DINOS } from '@app/dinosaurs/mock-dinosaurs';
import form from 'devextreme/ui/form';
import DxForm from 'devextreme/ui/form';
//import notify from 'devextreme/ui/notify';


let test = document.getElementById("dinoform");
let test2 = form.getInstance(test) as form;
//let name = instance.instance().getEditor("Name").option('value')// failed


@Component({
  selector: 'app-dino-form',
  templateUrl: './dino-form.component.html',
  styleUrls: ['./dino-form.component.scss']
})


export class DinoFormComponent implements OnInit {
  @ViewChild(DxFormComponent) form:DxFormComponent;
  dinoz:Dinosaur = new Dinosaur()
  dinosaurs:Dinosaur[];
  dino= DINOS;
  dinos:object[];

  test3:FormData= new FormData; //failed 
  //editor: DxForm;
  
  


  
  
  
  buttonOptions: any = {
    text: "Save",
    type: "success",
    
    //useSubmitBehavior: false
}

  constructor(service:DinosaursService) {
    this.dinos=service.getDino();
   }
  
   saveDino(dinosaur:any){
    
    this.dinoz = dinosaur;
    
    
    //console.log();
    var name = this.form.instance.instance().getEditor("Name");
    //this.dinoz.Name = instance.getEditor("Name").option('value');
    var rating = this.form.instance.instance().getEditor("Rating");
    var species = this.form.instance.instance().getEditor("Species");
    var combatpotential = this.form.instance.instance().getEditor("Combat Potential");
    var image = this.form.instance.instance().getEditor("Image");
    
    this.dinos.push({Name:name.option('value'),Rating:rating.option('value'),Species:species.option('value'),
    CombatPotential:combatpotential.option('value'),Image:image.option('value')});

    //this.form.instance.resetValues;
     //this.dino.push({Name:'',Rating:0,Species:'',CombatPotential:'',Image:''})
     //this.dino.push(this.form.formData);
     
   }
   
  ngOnInit() {
  }

}
