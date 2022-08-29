
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreaterUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Baiacu',
    description: 'Nome do Usuário.',
  })
  name: string;
  @IsEmail()
  @ApiProperty({
    example: 'baiacu@peixes.com',
    description: 'Email do Usuário.',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    example: 'Abc123@',
    description:
      'Senha do Usuário. Obs.: Ao menos uma letra minúscula, uma maiúscula, um número e um caracter especial',
  })
  password: string;
}
