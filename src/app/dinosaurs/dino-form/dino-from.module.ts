import { NgModule, enableProdMode} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinoFormComponent } from '@app/dinosaurs/dino-form/dino-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxCheckBoxModule, DxNumberBoxModule, DxButtonModule, DxAutocompleteModule, DxFormModule, DxDataGridModule } from 'devextreme-angular';
import { DinoFormRouterModule } from '@app/dinosaurs/dino-form/dino-form-router.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    DxCheckBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxAutocompleteModule,
    DxFormModule,
    DinoFormRouterModule,
    DxDataGridModule
  ],
  exports:[
    DinoFormComponent
  ],
  declarations: [
    DinoFormComponent
  ]
})
export class DinoFromModule { }
