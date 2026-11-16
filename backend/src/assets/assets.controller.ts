import { Controller, Get, Param } from '@nestjs/common';
import { AssetsService } from './assets.service';
import type { Asset } from './interfaces/asset.interface';

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
}
