import { MenuService } from 'src/app/services/menu.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.model';
import { Router } from '@angular/router';
import { Topping } from '../models/topping.model';
import { IceLevel, SweetLevel, Size, MPLevel } from '../models/menu.enum';
import { OrderRequirement } from '../models/order-requirement.model';
import { Recipe, upgradeMP } from '../models/recipe.model';

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
  orderRequirement: OrderRequirement;

  constructor(
    private _menuService: MenuService
  ) {
  }

  getRecipeByDrink(orderRequirement: OrderRequirement): Recipe {
    const { recipes, toppingHash } = this._menuService;
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

  getFinalRecipe(recipe: Recipe, orderRequirement: OrderRequirement): Recipe {
    const { sweetLevel, iceLevel, size } = orderRequirement;
    const finalRecipe = { ...recipe };
    const { toppingHash } = this._menuService;
    finalRecipe.toppings = orderRequirement.toppings.map(toppingId => {
      const topping = toppingHash[toppingId];
      return {
        ...topping,
        value: topping.sizeValue[size]
      };
    });
    // Sweet level
    if (sweetLevel === SweetLevel.Less) {
      finalRecipe.honey = finalRecipe.honey - 0.2;
    }
    if (sweetLevel === SweetLevel.Half) {
      finalRecipe.honey = finalRecipe.honey - 0.4;
    }
    if (sweetLevel === SweetLevel.Little) {
      finalRecipe.honey = finalRecipe.honey - 0.6;
    }
    // Ice level
    if (iceLevel === IceLevel.LessIce) {
      finalRecipe.tea = finalRecipe.tea + 40;
    }
    if (iceLevel === IceLevel.NoIce) {
      finalRecipe.tea = finalRecipe.tea + 60;
      finalRecipe.mp = upgradeMP(finalRecipe.mp);
    }

    return finalRecipe;
  }
}
