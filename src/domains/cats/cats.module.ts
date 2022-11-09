import { Module } from '@nestjs/common';

import { CatsService } from './cats.service';

@Module({
  providers: [CatsService],
})
export class CatsModule {
  constructor() {
    console.log(`${this.constructor.name} initialized`);
  }
}
