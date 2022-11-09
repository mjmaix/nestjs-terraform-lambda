import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  private readonly uniqIdentifier: string;
  constructor() {
    if (!this.uniqIdentifier) {
      this.uniqIdentifier = uuidv4();
    }
    console.log(`${this.constructor.name} initialized - ${this.uniqIdentifier}`);
  }

  talk() {
    return 'meow';
  }

  create(createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  findAll() {
    return `This action returns all cats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
