import { PartialType } from '@nestjs/mapped-types';

import { CreateZooDto } from './create-zoo.dto';

export class UpdateZooDto extends PartialType(CreateZooDto) {}
