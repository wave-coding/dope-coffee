import { MacrosType } from '@/types';

export interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  calories: number;
  ingredients: string[];
  macros: MacrosType[];
}
