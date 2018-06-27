import { DinoPopUpRouterModule } from './dino-pop-up-router.module';

describe('DinoPopUpRouterModule', () => {
  let dinoPopUpRouterModule: DinoPopUpRouterModule;

  beforeEach(() => {
    dinoPopUpRouterModule = new DinoPopUpRouterModule();
  });

  it('should create an instance', () => {
    expect(dinoPopUpRouterModule).toBeTruthy();
  });
});
