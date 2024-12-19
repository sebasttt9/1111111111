import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BandasService } from './bandas.service';
import { CreateBandaDto } from './dto/create-banda.dto';
import { UpdateBandaDto } from './dto/update-banda.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('bandas')
@ApiTags('Bandas de Rock')
export class BandasController {
  constructor(private readonly bandasService: BandasService) {}

  @Post()
  create(@Body() createBandaDto: CreateBandaDto) {
    return this.bandasService.create(createBandaDto);
  }

  @Get()
  findAll() {
    return this.bandasService.findAllBands();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bandasService.findOneBand(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBandaDto: UpdateBandaDto) {
    return this.bandasService.update(+id, updateBandaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bandasService.remove(+id);
  }
}
