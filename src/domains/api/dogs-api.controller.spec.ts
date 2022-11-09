import { Test, TestingModule } from '@nestjs/testing';

import { DogsApiController } from './dogs-api.controller';

describe('DogsApiController', () => {
  let controller: DogsApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogsApiController],
    }).compile();

    controller = module.get<DogsApiController>(DogsApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
