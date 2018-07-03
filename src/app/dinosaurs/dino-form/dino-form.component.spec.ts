import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoFormComponent } from './dino-form.component';

describe('DinoFormComponent', () => {
  let component: DinoFormComponent;
  let fixture: ComponentFixture<DinoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
