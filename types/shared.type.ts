export type MacroType = 'Protein' | 'Carb' | 'Fat' | 'Vegetarian' | 'Hug';

export type handlerType = () => void;

export type ChipMicroType = {
  type: MacroType;
  intensity?: IntensityType | null;
  className?: string;
};

export type IntensityType = 'high' | 'low';

export type MacrosType = {
  type: MacroType;
  amount: number;
  intensity?: IntensityType | null;
};
