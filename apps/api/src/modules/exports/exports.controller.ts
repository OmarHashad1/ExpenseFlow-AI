import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExportsService } from './exports.service';
import { CreateExportDto } from './dto/create-export.dto';
import { UpdateExportDto } from './dto/update-export.dto';

@Controller('exports')
export class ExportsController {
  constructor(private readonly exportsService: ExportsService) {}

  @Post()
  create(@Body() createExportDto: CreateExportDto) {
    return this.exportsService.create(createExportDto);
  }

  @Get()
  findAll() {
    return this.exportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exportsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExportDto: UpdateExportDto) {
    return this.exportsService.update(+id, updateExportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exportsService.remove(+id);
  }
}
