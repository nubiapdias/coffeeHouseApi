import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TablesService } from './table.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@ApiTags('tables')
@ApiBearerAuth()
@Controller('tables')
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar uma nova mesa.',
  })
  create(@Body() dto: CreateTableDto): Promise<Table> {
    return this.tablesService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todas as mesas.',
  })
  findAll(): Promise<Table[]> {
    return this.tablesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar uma mesa.',
  })
  findOne(@Param('id') id: string): Promise<Table> {
    return this.tablesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar uma mesa.',
  })
  update(@Param('id') id: string, @Body() dto: UpdateTableDto): Promise<Table> {
    return this.tablesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Excluir uma mesa.',
  })
  remove(@Param('id') id: string) {
    return this.tablesService.remove(id);
  }
}
