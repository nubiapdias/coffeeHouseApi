import { PartialType } from '@nestjs/mapped-types';
import { CreaterUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreaterUserDto) {}
