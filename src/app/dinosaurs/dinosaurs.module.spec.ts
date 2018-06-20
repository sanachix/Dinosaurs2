import { DinosaursModule } from './dinosaurs.module';

describe('DinosaursModule', () => {
  let dinosaursModule: DinosaursModule;

  beforeEach(() => {
    dinosaursModule = new DinosaursModule();
  });

  it('should create an instance', () => {
    expect(dinosaursModule).toBeTruthy();
  });
});
