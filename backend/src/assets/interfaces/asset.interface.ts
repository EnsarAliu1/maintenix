export const ASSET_STATUSES = [
  'OPERATIONAL',
  'UNDER_MAINTENANCE',
  'OUT_OF_SERVICE',
] as const;

export type AssetStatus = (typeof ASSET_STATUSES)[number];

export interface Asset {
  id: string;
  name: string;
  serialNumber: string;
  location: string;
  status: AssetStatus;
}
