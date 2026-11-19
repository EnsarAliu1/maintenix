import { ValidateIf, IsString, Length, Matches, IsIn } from 'class-validator';

import { ASSET_STATUSES } from '../interfaces/asset.interface';
import type { AssetStatus } from '../interfaces/asset.interface';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAssetDto {
  @ApiPropertyOptional({
    description: 'Name of the asset',
    example: 'Hydraulic Press',
    minLength: 2,
    maxLength: 100,
  })
  @ValidateIf((_object, value) => value !== undefined)
  @IsString()
  @Length(2, 100)
  @Matches(/\S/)
  name?: string;

  @ApiPropertyOptional({
    description: 'Serial Number of the asset',
    example: 'HP-001',
    minLength: 1,
    maxLength: 50,
  })
  @ValidateIf((_object, value) => value !== undefined)
  @IsString()
  @Length(1, 50)
  @Matches(/\S/)
  serialNumber?: string;

  @ApiPropertyOptional({
    description: 'Location of the asset',
    example: 'Hall A',
    minLength: 2,
    maxLength: 100,
  })
  @ValidateIf((_object, value) => value !== undefined)
  @IsString()
  @Length(2, 100)
  @Matches(/\S/)
  location?: string;

  @ApiPropertyOptional({
    description: 'Status of the assset',
    example: 'OPERATIONAL',
    enum: [...ASSET_STATUSES],
  })
  @ValidateIf((_object, value) => value !== undefined)
  @IsIn(ASSET_STATUSES)
  status?: AssetStatus;
}
