import { Controller, Get, Param, Patch } from '@nestjs/common';
import { AssetsService } from './assets.service';
import type { Asset } from './interfaces/asset.interface';
import { Body, Post } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { AssetResponseDto } from './dto/asset-response.dto';

import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiConflictResponse,
} from '@nestjs/swagger';

@ApiTags('Assets')
@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}
  //  Get all assets
  @ApiOperation({
    summary: 'Get all assets',
  })
  @ApiOkResponse({
    description: 'List of registered assets',
    type: AssetResponseDto,
    isArray: true,
  })
  @Get()
  findAll(): Asset[] {
    return this.assetsService.findAll();
  }

  // Get asset
  @ApiOperation({
    summary: 'Get asset by ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Unique identifier of the asset',
    type: String,
    example: '1',
  })
  @ApiOkResponse({
    description: 'Asset found',
    type: AssetResponseDto,
  })
  @ApiNotFoundResponse({
    description: 'Asset not found',
  })
  @Get(':id')
  findOne(@Param('id') id: string): Asset {
    return this.assetsService.findOne(id);
  }

  //Post asset
  @ApiOperation({
    summary: 'Create an asset',
  })
  @ApiCreatedResponse({
    description: 'Asset succesfully created',
    type: AssetResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Invalid asset data',
  })
  @ApiConflictResponse({
    description: 'Serial number already exists',
  })
  @Post()
  create(@Body() createAssetDto: CreateAssetDto): Asset {
    return this.assetsService.create(createAssetDto);
  }

  @ApiOperation({
    summary: 'Update an asset',
  })
  @ApiParam({
    name: 'id',
    description: 'Unique asset identifier',
    example: '1',
  })
  @ApiOkResponse({
    description: 'Asset succesfully updated',
    type: AssetResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Empty update or invalid asset data',
  })
  @ApiNotFoundResponse({
    description: 'Asset not found',
  })
  @ApiConflictResponse({
    description: 'Serial number already exists',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssetDto: UpdateAssetDto,
  ): Asset {
    return this.assetsService.update(id, updateAssetDto);
  }
}
