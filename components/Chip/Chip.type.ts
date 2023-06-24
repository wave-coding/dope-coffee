import { Icon } from '@/components/Icon/icon.type';
import { IntensityType, MacroType } from '@/types';

export type ChipFunc = (intensity?: IntensityType | null) => Icon | null;

export type ChipRecords = Record<MacroType, ChipFunc>;
