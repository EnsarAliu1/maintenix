export type AssetStatus = 'OPERATIONAL' | 'UNDER_MAINTENANCE' | 'OUT_OF_SERVICE';

export interface Asset {
  id: string;
  name: string;
  serialNumber: string;
  location: string;
  status: AssetStatus;
}
