import { Asset, ASSET_STATUSES } from '../interfaces/asset.interface';
import { ApiProperty } from '@nestjs/swagger';

export class AssetResponseDto implements Asset {
  @ApiProperty({
    example: '1',
    description: 'Unique identifier of the asset',
  })
  id: string;

  @ApiProperty({
    example: 'Hydraulic Press',
    description: 'Name of the asset',
  })
  name: string;

  @ApiProperty({
    example: 'HP-001',
    description: 'Serial number of the asset',
  })
  serialNumber: string;

  @ApiProperty({
    example: 'Hall A',
    description: 'Location of the asset',
  })
  location: string;

  @ApiProperty({
    example: 'OPERATIONAL',
    description: 'Status of the asset',
    enum: [...ASSET_STATUSES],
  })
  status: 'OPERATIONAL' | 'UNDER_MAINTENANCE' | 'OUT_OF_SERVICE';
}
