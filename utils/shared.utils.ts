import { MacrosType } from '@/types';

type getWidthPercentageInputType = { total: number; amount: number };

export const calculateSumOfMacros = (macros: MacrosType[]) => {
  return macros.reduce((sum, macro) => sum + macro.amount, 0);
};

export const getWidthPercentage = ({
  amount,
  total,
}: getWidthPercentageInputType) => {
  return Math.round((amount / total) * 100);
};

export const getWidthPercentageString = (
  input: getWidthPercentageInputType
): string => {
  const width = getWidthPercentage(input);
  return `${width}%`;
};

export const getStrokeAndFillColors = (
  isActive?: boolean
): { stroke: string; fill: string } => {
  return {
    stroke: isActive ? '#FFAE5F' : '#999999',
    fill: isActive ? '#FFAE5F' : 'transparent',
  };
};

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
