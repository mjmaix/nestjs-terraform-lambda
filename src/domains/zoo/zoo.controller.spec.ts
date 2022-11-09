import { Test, TestingModule } from '@nestjs/testing';

import { ZooController } from './zoo.controller';
import { ZooService } from './zoo.service';

describe('ZooController', () => {
  let controller: ZooController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZooController],
      providers: [ZooService],
    }).compile();

    controller = module.get<ZooController>(ZooController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
