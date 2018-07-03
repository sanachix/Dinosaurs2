import { DinoFormRouterModule } from './dino-form-router.module';

describe('DinoFormRouterModule', () => {
  let dinoFormRouterModule: DinoFormRouterModule;

  beforeEach(() => {
    dinoFormRouterModule = new DinoFormRouterModule();
  });

  it('should create an instance', () => {
    expect(dinoFormRouterModule).toBeTruthy();
  });
});
