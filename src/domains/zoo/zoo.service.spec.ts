import { Test, TestingModule } from '@nestjs/testing';

import { ZooService } from './zoo.service';

describe('ZooService', () => {
  let service: ZooService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZooService],
    }).compile();

    service = module.get<ZooService>(ZooService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
