export interface Topping {
    id: number;
    name: string;
}

export interface ToppingRecipe extends Topping {
    value: number;
}