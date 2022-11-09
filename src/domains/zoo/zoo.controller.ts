import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { CreateZooDto } from './dto/create-zoo.dto';
import { UpdateZooDto } from './dto/update-zoo.dto';
import { ZooService } from './zoo.service';

@Controller('zoo')
export class ZooController {
  constructor(private readonly zooService: ZooService) {
    console.log(`${this.constructor.name} initialized`);
  }

  @Post()
  create(@Body() createZooDto: CreateZooDto) {
    return this.zooService.create(createZooDto);
  }

  @ApiResponse({ status: HttpStatus.OK, description: 'Animal sounds' })
  @Get('lazy')
  lazy() {
    return this.zooService.animalSounds();
  }

  @Get()
  findAll() {
    return this.zooService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zooService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZooDto: UpdateZooDto) {
    return this.zooService.update(+id, updateZooDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zooService.remove(+id);
  }
}
