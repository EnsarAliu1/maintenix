import { Injectable, NotFoundException } from '@nestjs/common';
import type { Asset } from './interfaces/asset.interface';

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
}
