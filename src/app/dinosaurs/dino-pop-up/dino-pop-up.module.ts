import { NgModule,enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinoPopUpComponent } from '@app/dinosaurs/dino-pop-up/dino-pop-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DxPopupModule, DxButtonModule, DxTemplateModule } from 'devextreme-angular';
import { DinoPopUpRouterModule } from '@app/dinosaurs/dino-pop-up/dino-pop-up-router.module';
import { bind } from '@angular/core/src/render3/instructions';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    DinoPopUpRouterModule,
    DxPopupModule,
    DxButtonModule,
    DxTemplateModule
  ],

  exports:[
    DinoPopUpComponent
  ],
  declarations: [
    
    DinoPopUpComponent
  ]
})
export class DinoPopUpModule { }

//platformBrowserDynamic().bootstrapModule(DinoPopUpModule);
