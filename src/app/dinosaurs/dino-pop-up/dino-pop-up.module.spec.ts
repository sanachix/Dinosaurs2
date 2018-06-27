import { DinoPopUpModule } from './dino-pop-up.module';

describe('DinoPopUpModule', () => {
  let dinoPopUpModule: DinoPopUpModule;

  beforeEach(() => {
    dinoPopUpModule = new DinoPopUpModule();
  });

  it('should create an instance', () => {
    expect(dinoPopUpModule).toBeTruthy();
  });
});
