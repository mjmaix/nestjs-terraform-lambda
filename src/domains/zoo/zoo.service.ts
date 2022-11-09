import { Injectable } from '@nestjs/common';

import { LazyModuleFactory, LazyModuleKey } from '../../factories/lazy-module.factory';
import { CreateZooDto } from './dto/create-zoo.dto';
import { UpdateZooDto } from './dto/update-zoo.dto';

@Injectable()
export class ZooService {
  constructor() {
    console.log(`${this.constructor.name} initialized`);
  }

  create(createZooDto: CreateZooDto) {
    return 'This action adds a new zoo';
  }

  findAll() {
    return `This action returns all zoo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zoo`;
  }

  update(id: number, updateZooDto: UpdateZooDto) {
    return `This action updates a #${id} zoo`;
  }

  remove(id: number) {
    return `This action removes a #${id} zoo`;
  }

  async animalSounds() {
    const dogsService = await this.lazyLoadDogsService();
    const dogTalk = dogsService.talk();

    const catsService = await this.lazyLoadCatsService();
    const catTalk = catsService.talk();

    return {
      dogTalk,
      catTalk,
    };
  }

  private async lazyLoadDogsService() {
    const { DogsModule } = await import('../dogs/dogs.module');
    const moduleRef = await LazyModuleFactory.instance.getRef(LazyModuleKey.Dogs, DogsModule);

    const { DogsService } = await import('../dogs/dogs.service');
    return moduleRef.get(DogsService);
  }

  private async lazyLoadCatsService() {
    const { CatsModule } = await import('../cats/cats.module');
    const moduleRef = await LazyModuleFactory.instance.getRef(LazyModuleKey.Cats, CatsModule);

    const { CatsService } = await import('../cats/cats.service');
    return moduleRef.get(CatsService);
  }
}
