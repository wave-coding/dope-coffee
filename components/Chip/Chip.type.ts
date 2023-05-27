import { Icon } from '../Icon/icon.type';

export type ChipType = 'Protein' | 'Carb' | 'Fat' | 'Vegetarian' | 'Hug';

export type IntensityType = 'high' | 'low';

export type ChipFunc = (intensity?: IntensityType) => Icon | null;

export type TChips = Record<ChipType, ChipFunc>;
