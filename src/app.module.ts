import { Module } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './domains/api/api.module';
import { ZooModule } from './domains/zoo/zoo.module';
import { LazyModuleFactory } from './factories/lazy-module.factory';

@Module({
  imports: [ApiModule, ZooModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private lazyModuleLoader: LazyModuleLoader) {
    LazyModuleFactory.instance.setLazyModuleLoader(lazyModuleLoader);
  }
}
