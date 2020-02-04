import { MenuService } from 'src/app/services/menu.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.model';
import { Router } from '@angular/router';
import { Topping } from '../models/topping.model';
import { IceLevel, SweetLevel, Size } from '../models/menu.enum';
import { OrderRequirement } from '../models/order-requirement.model';

export enum Stage {
  Drink,
  Size,
  Topping,
  Ice,
  Sweet,
  Recipe,
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  stage: Stage;
  drinkRequirement: OrderRequirement;

  constructor(
    private _menuService: MenuService
  ) {
  }

  getSelectedToppingsByDrink(drinkId: number): Topping[] {
    const { recipes } = this._menuService;
    const drink = recipes.find(d => d.drinkId === drinkId);
    if (!drink) {
      return [];
    }
    return drink.toppings;
  }

  getFinalRecipe(orderRequirement: OrderRequirement): any {
    const { recipes, drinkHash, toppingHash } = this._menuService;
    const drink = recipes.find(d => d.drinkId === orderRequirement.drinkId);
    if (drink) {
      const allDrinkRecipes = recipes.filter(r => r.drinkId === orderRequirement.drinkId);
      if (allDrinkRecipes.length > 0) {
        if (orderRequirement.size === Size.Large && orderRequirement.toppings.length === 0) {
          return allDrinkRecipes.find(r => r.level === 1);
        }

        const allToppingWeight = orderRequirement.toppings.reduce((weight, topping) => {
          weight += toppingHash[topping].sizeValue[orderRequirement.size];
          return weight;
        }, 0);

        if (allToppingWeight >= 140 || orderRequirement.size === Size.Regular) {
          return allDrinkRecipes.find(r => r.level === 2);
        }

        return allDrinkRecipes.find(r => r.level === 3);
      }
    }
    return null;
  }
}
