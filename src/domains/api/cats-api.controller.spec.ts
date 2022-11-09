import { Test, TestingModule } from '@nestjs/testing';

import { CatsApiController } from './cats-api.controller';

describe('CatsApiController', () => {
  let controller: CatsApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsApiController],
    }).compile();

    controller = module.get<CatsApiController>(CatsApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
