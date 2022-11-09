import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Injectable()
export class DogsService {
  private readonly uniqIdentifier: string;
  constructor() {
    if (!this.uniqIdentifier) {
      this.uniqIdentifier = uuidv4();
    }
    console.log(`${this.constructor.name} initialized - ${this.uniqIdentifier}`);
  }

  talk() {
    return 'woof';
  }

  create(createDogDto: CreateDogDto) {
    return 'This action adds a new dog';
  }

  findAll() {
    return `This action returns all dogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  update(id: number, updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
