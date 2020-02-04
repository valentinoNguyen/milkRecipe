import { Size } from './menu.enum';
import { Dictionary } from './dictionary.model';

export interface Topping {
  id: number;
  name?: string;
  image?: string;
  sizeValue: Dictionary<number>;
}

export interface ToppingRecipe extends Topping {
  value: number;
}
