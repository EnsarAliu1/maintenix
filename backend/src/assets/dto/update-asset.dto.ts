import { ValidateIf, IsString, Length, Matches, IsIn } from 'class-validator';

import { ASSET_STATUSES } from '../interfaces/asset.interface';
import type { AssetStatus } from '../interfaces/asset.interface';

export class UpdateAssetDto {
  @ValidateIf((_object, value) => value !== undefined)
  @IsString()
  @Length(2, 100)
  @Matches(/\S/)
  name?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @IsString()
  @Length(1, 50)
  @Matches(/\S/)
  serialNumber?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @IsString()
  @Length(2, 100)
  @Matches(/\S/)
  location?: string;

  @ValidateIf((_object, value) => value !== undefined)
  @IsIn(ASSET_STATUSES)
  status?: AssetStatus;
}
