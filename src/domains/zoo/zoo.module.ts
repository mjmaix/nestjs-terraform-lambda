import { Module } from '@nestjs/common';

import { ZooController } from './zoo.controller';
import { ZooService } from './zoo.service';

@Module({
  controllers: [ZooController],
  providers: [ZooService],
})
export class ZooModule {
  constructor() {
    console.log(`${this.constructor.name} initialized`);
  }
}
