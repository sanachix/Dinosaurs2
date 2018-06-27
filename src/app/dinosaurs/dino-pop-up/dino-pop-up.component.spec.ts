import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoPopUpComponent } from './dino-pop-up.component';

describe('DinoPopUpComponent', () => {
  let component: DinoPopUpComponent;
  let fixture: ComponentFixture<DinoPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinoPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
