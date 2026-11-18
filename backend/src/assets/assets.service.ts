import { Injectable, NotFoundException } from '@nestjs/common';
import type { Asset } from './interfaces/asset.interface';
import { ConflictException, BadRequestException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import type { CreateAssetDto } from './dto/create-asset.dto';
import type { UpdateAssetDto } from './dto/update-asset.dto';

@Injectable()
export class AssetsService {
  private readonly assets: Asset[] = [
    {
      id: '1',
      location: 'Hall A',
      name: 'Hydraulic Press',
      serialNumber: 'HP-001',
      status: 'OPERATIONAL',
    },
    {
      id: '2',
      location: 'Hall B',
      name: 'Air Compressor',
      serialNumber: 'AC-001',
      status: 'UNDER_MAINTENANCE',
    },
    {
      id: '3',
      location: 'Hall A',
      name: 'Conveyor Belt',
      serialNumber: 'CB-001',
      status: 'OUT_OF_SERVICE',
    },
  ];

  findAll(): Asset[] {
    return this.assets;
  }

  findOne(id: string): Asset {
    const asset = this.assets.find((asset) => asset.id === id);

    if (!asset) {
      throw new NotFoundException(`Asset with ID ${id} not found`);
    }

    return asset;
  }

  create(createAssetDto: CreateAssetDto): Asset {
    const serialNumber = createAssetDto.serialNumber.trim().toUpperCase();

    if (this.assets.some((asset) => asset.serialNumber === serialNumber)) {
      throw new ConflictException('This serial number already exists!');
    }

    const id = randomUUID();

    const newAsset: Asset = {
      id,
      name: createAssetDto.name,
      serialNumber,
      location: createAssetDto.location,
      status: createAssetDto.status,
    };

    this.assets.push(newAsset);
    return newAsset;
  }

  update(id: string, updateAssetDto: UpdateAssetDto): Asset {
    const asset = this.findOne(id);

    if (
      updateAssetDto.name === undefined &&
      updateAssetDto.serialNumber === undefined &&
      updateAssetDto.location === undefined &&
      updateAssetDto.status === undefined
    ) {
      throw new BadRequestException('At least one field must be provided');
    }

    let normalizedSerialNumber: string | undefined;

    if (updateAssetDto.serialNumber !== undefined) {
      normalizedSerialNumber = updateAssetDto.serialNumber.trim().toUpperCase();

      const serialNumberExists = this.assets.some(
        (existingAsset) =>
          existingAsset.serialNumber === normalizedSerialNumber &&
          existingAsset.id !== id,
      );

      if (serialNumberExists) {
        throw new ConflictException('This serial number already exists!');
      }
    }

    const updatedAsset: Asset = {
      ...asset,
      name: updateAssetDto.name ?? asset.name,
      serialNumber: normalizedSerialNumber ?? asset.serialNumber,
      location: updateAssetDto.location ?? asset.location,
      status: updateAssetDto.status ?? asset.status,
    };

    const index = this.assets.findIndex(
      (existingAsset) => existingAsset.id === id,
    );

    this.assets[index] = updatedAsset;

    return updatedAsset;
  }
}
