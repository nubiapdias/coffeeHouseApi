import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FavoriteProductDto } from './dto/favorite.dto';
import { Favorite } from './entities/favorite.entity';
import { FavoritesService } from './favorite.service';

@UseGuards(AuthGuard())
@ApiTags('favorites')
@ApiBearerAuth()
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  @ApiOperation({
    summary: 'Favoritar produto.',
  })
  favoriteProduct(@Body() dto: FavoriteProductDto): Promise<Favorite> {
    return this.favoritesService.favoriteProduct(dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Retirar dos Favoritos.',
  })
  unfavoriteProduct(@Param('id') id: string) {
    return this.favoritesService.unfavoriteProduct(id);
  }

  @Get('user/:id')
  @ApiOperation({
    summary: 'Listar produtos favoritos de um usuário.',
  })
  getUserFavorites(@Param('id') id: string): Promise<Favorite[]> {
    return this.favoritesService.getUserFavorites(id);
  }

  @Get('product/:id')
  @ApiOperation({
    summary: 'Listar todos os usuários que favoritaram um determinado produto.',
  })
  getUsersWhoFavoritedProduct(@Param('id') id: string) {
    return this.favoritesService.getUsersWhoFavoritedProduct(id);
  }
}
