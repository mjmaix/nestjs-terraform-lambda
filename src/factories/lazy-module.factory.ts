import { DynamicModule, Type } from '@nestjs/common';
import { LazyModuleLoader, ModuleRef } from '@nestjs/core';

export enum LazyModuleKey {
  Cats = 'cats',
  Dogs = 'dogs',
}

export class LazyModuleFactory {
  public static instance = new LazyModuleFactory();

  private moduleInstances = new Map<string, ModuleRef>();

  private lazyModuleLoader: LazyModuleLoader;

  public setLazyModuleLoader(lazyModuleLoader: LazyModuleLoader) {
    this.lazyModuleLoader = lazyModuleLoader;
  }

  public async getRef(
    key: LazyModuleKey,
    moduleCls: Promise<Type<unknown> | DynamicModule> | Type<unknown> | DynamicModule,
  ) {
    let _module = this.moduleInstances.get(key);
    if (_module) {
      // cached
      return _module;
    }

    const moduleRef = await this.lazyModuleLoader.load(() => moduleCls);
    _module = moduleRef;
    this.moduleInstances.set(key, _module);

    return _module;
  }
}
