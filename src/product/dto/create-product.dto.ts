import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Livro ou Bebida',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do produto',
    example:
      'Sinopse ou descrição',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Preço do produto',
    example: 12.34,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do produto',
    example: 'https://images.vexels.com/media/users/3/128080/isolated/preview/ba993e973cf5536cc3a2867c860f4f51-xicara-de-cha-quente.png',
  })
  image: string;
}
