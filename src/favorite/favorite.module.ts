import { Module } from '@nestjs/common';
import { FavoritesService } from './favorite.service';
import { FavoritesController } from './favorite.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoriteModule {}
