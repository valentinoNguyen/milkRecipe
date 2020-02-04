import { Size, IceLevel, SweetLevel } from './menu.enum';

export interface OrderRequirement {
  drinkId: number;
  toppings?: number[];
  size: Size;
  iceLevel: IceLevel;
  sweetLevel: SweetLevel;
}
