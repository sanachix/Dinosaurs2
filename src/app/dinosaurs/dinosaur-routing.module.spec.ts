import { DinosaurRoutingModule } from './dinosaur-routing.module';

describe('DinosaurRoutingModule', () => {
  let dinosaurRoutingModule: DinosaurRoutingModule;

  beforeEach(() => {
    dinosaurRoutingModule = new DinosaurRoutingModule();
  });

  it('should create an instance', () => {
    expect(dinosaurRoutingModule).toBeTruthy();
  });
});
