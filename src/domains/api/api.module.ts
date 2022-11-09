import { Module } from '@nestjs/common';

import { CatsApiController } from './cats-api.controller';
import { DogsApiController } from './dogs-api.controller';

@Module({
  controllers: [CatsApiController, DogsApiController],
})
export class ApiModule {
  constructor() {
    console.log(`${this.constructor.name} initialized`);
  }
}
