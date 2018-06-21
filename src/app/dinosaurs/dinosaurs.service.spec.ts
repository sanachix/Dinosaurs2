import { TestBed, inject } from '@angular/core/testing';

import { DinosaursService } from './dinosaurs.service';

describe('DinosaursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinosaursService]
    });
  });

  it('should be created', inject([DinosaursService], (service: DinosaursService) => {
    expect(service).toBeTruthy();
  }));
});
