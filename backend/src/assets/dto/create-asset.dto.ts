import { IsString, IsNotEmpty, Length, IsIn, Matches } from 'class-validator';

import { ASSET_STATUSES } from '../interfaces/asset.interface';
import type { AssetStatus } from '../interfaces/asset.interface';

import { ApiProperty } from '@nestjs/swagger';

export class CreateAssetDto {
  @ApiProperty({
    description: 'Name of the asset',
    example: 'Hydraulic Press',
    minLength: 2,
    maxLength: 100,
  })
  @IsString()
  @Length(2, 100)
  @Matches(/\S/)
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Serial Number of the asset',
    example: 'HP-001',
    minLength: 1,
    maxLength: 50,
  })
  @IsString()
  @Length(1, 50)
  @Matches(/\S/)
  @IsNotEmpty()
  serialNumber: string;

  @ApiProperty({
    description: 'Location of the asset',
    example: 'Hall A',
    minLength: 2,
    maxLength: 100,
  })
  @IsString()
  @Length(2, 100)
  @Matches(/\S/)
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    description: 'Status of the assset',
    example: 'OPERATIONAL',
    enum: [...ASSET_STATUSES],
  })
  @IsIn(ASSET_STATUSES)
  status: AssetStatus;
}
