import {
    IsString,
    IsNotEmpty,
    Length,
    IsIn,
    Matches
} from 'class-validator'

import { ASSET_STATUSES } from '../interfaces/asset.interface'

export class CreateAssetDto {
    @IsString()
    @Length(2, 100)
    @Matches(/\S/)
    @IsNotEmpty()
    name: string;

    @IsString()
    @Length(2, 50)
    @Matches(/\S/)
    @IsNotEmpty()
    serialNumber: string;

    @IsString()
    @Length(2, 100)
    @Matches(/\S/)
    @IsNotEmpty()
    location: string;

    @IsIn(ASSET_STATUSES)
    @Matches(/\S/)
    @IsNotEmpty()
    status: string
}