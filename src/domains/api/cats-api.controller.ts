import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { LazyModuleFactory, LazyModuleKey } from '../../factories/lazy-module.factory';
import { CreateCatDto } from '../cats/dto/create-cat.dto';
import { UpdateCatDto } from '../cats/dto/update-cat.dto';

@Controller('cats')
export class CatsApiController {
  constructor() {
    console.log(`${this.constructor.name} initialized`);
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    const catsService = await this.lazyLoadCatsService();
    return catsService.create(createCatDto);
  }

  @Get('lazy')
  async lazy() {
    const catsService = await this.lazyLoadCatsService();
    return catsService.talk();
  }

  @Get()
  async findAll() {
    const catsService = await this.lazyLoadCatsService();
    return catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const catsService = await this.lazyLoadCatsService();
    return catsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    const catsService = await this.lazyLoadCatsService();
    return catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const catsService = await this.lazyLoadCatsService();
    return catsService.remove(+id);
  }

  private async lazyLoadCatsService() {
    const { CatsModule } = await import('../cats/cats.module');
    const moduleRef = await LazyModuleFactory.instance.getRef(LazyModuleKey.Cats, CatsModule);

    const { CatsService } = await import('../cats/cats.service');
    return moduleRef.get(CatsService);
  }
}
