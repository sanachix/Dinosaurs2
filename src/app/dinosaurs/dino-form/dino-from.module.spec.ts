import { DinoFromModule } from './dino-from.module';

describe('DinoFromModule', () => {
  let dinoFromModule: DinoFromModule;

  beforeEach(() => {
    dinoFromModule = new DinoFromModule();
  });

  it('should create an instance', () => {
    expect(dinoFromModule).toBeTruthy();
  });
});
