import { Test, TestingModule } from '@nestjs/testing';
import { SilasBrasilController } from './silas-brasil.controller';

describe('SilasBrasilController', () => {
  let controller: SilasBrasilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SilasBrasilController],
    }).compile();

    controller = module.get<SilasBrasilController>(SilasBrasilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
