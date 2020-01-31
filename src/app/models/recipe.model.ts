import { MPLevel } from "./menu.enum";
import { ToppingRecipe } from "./topping.model";

export interface Recipe {
    drinkId: number;
    tea: number;
    honey: number;
    mp: MPLevel;
    toppings: ToppingRecipe[];
}