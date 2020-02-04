import { MPLevel, Size } from './menu.enum';
import { ToppingRecipe } from './topping.model';

export interface Recipe {
    drinkId: number;
    level: number;
    tea: number;
    honey: number;
    mp: MPLevel;
    toppings: ToppingRecipe[];
}

export function upgradeMP(mp: MPLevel): MPLevel {
  if (mp === MPLevel.Small) {
    return MPLevel.Medium;
  }
  if (mp === MPLevel.Medium) {
    return MPLevel.Large;
  }
  if (mp === MPLevel.Large) {
    return MPLevel.tps2;
  }
  return mp;
}
