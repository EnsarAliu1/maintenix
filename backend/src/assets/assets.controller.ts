import { Controller, Get, Param, Patch } from '@nestjs/common';
import { AssetsService } from './assets.service';
import type { Asset } from './interfaces/asset.interface';
import { Body, Post } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  findAll(): Asset[] {
    return this.assetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Asset {
    return this.assetsService.findOne(id);
  }

  @Post()
  create(@Body() createAssetDto: CreateAssetDto): Asset {
    return this.assetsService.create(createAssetDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssetDto: UpdateAssetDto,
  ): Asset {
    return this.assetsService.update(id, updateAssetDto);
  }
}
