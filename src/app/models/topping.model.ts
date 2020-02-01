export interface Topping {
    id: number;
    name: string;
    image?: string;
}

export interface ToppingRecipe extends Topping {
    value: number;
}