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
