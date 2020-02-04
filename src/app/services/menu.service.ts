import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Drink } from '../models/drink.model';
import { Router } from '@angular/router';
import { Topping } from '../models/topping.model';
import { IceLevel, SweetLevel, Size } from '../models/menu.enum';
import { OrderRequirement } from '../models/order-requirement.model';
import { Recipe } from '../models/recipe.model';
import { Dictionary } from '../models/dictionary.model';

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
export class MenuService {
  stage: Stage;
  drinkHash: Dictionary<Drink>;
  toppingHash: Dictionary<Topping>;
  recipes: Recipe[];
  orderRequirement: OrderRequirement;

  constructor(
    private _httpClient: HttpClient,
    private _router: Router
  ) {
    this.reset();
  }

  getDrinks(): Observable<Drink[]> {
    return this._httpClient.get<Drink[]>('assets/datas/drinks.json').pipe(
      tap(drinks => this.drinkHash = drinks.reduce((hash, drink) => {
        hash[drink.id] = drink;
        return hash;
      }, {})),
    );
  }

  getToppings(): Observable<Topping[]> {
    return this._httpClient.get<Topping[]>('assets/datas/toppings.json').pipe(
      tap(toppings => this.toppingHash = toppings.reduce((hash, topping) => {
        hash[topping.id] = topping;
        return hash;
      }, {})),
    );
  }

  getRecipes(): Observable<Recipe[]> {
    if (this.recipes) {
      return of(this.recipes);
    }
    return this._httpClient.get<Recipe[]>('assets/datas/recipes.json').pipe(
      tap(recipes => this.recipes = recipes),
    );
  }

  next() {
    if (this.stage === Stage.Drink) {
      this.stage = Stage.Size;
      this._router.navigate(['/size']);
      return;
    }
    if (this.stage === Stage.Size) {
      this.stage = Stage.Topping;
      this._router.navigate(['/topping']);
      return;
    }
    if (this.stage === Stage.Topping) {
      this.stage = Stage.Ice;
      this._router.navigate(['/ice']);
      return;
    }
    if (this.stage === Stage.Ice) {
      this.stage = Stage.Sweet;
      this._router.navigate(['/sweet']);
      return;
    }
    if (this.stage === Stage.Sweet) {
      this.stage = Stage.Recipe;
      this._router.navigate(['/recipe']);
      return;
    }
  }

  back() {
    if (this.stage === Stage.Size) {
      this.stage = Stage.Drink;
      this._router.navigate(['/menu']);
      return;
    }
    if (this.stage === Stage.Topping) {
      this.stage = Stage.Size;
      this._router.navigate(['/size']);
      return;
    }
    if (this.stage === Stage.Ice) {
      this.stage = Stage.Topping;
      this._router.navigate(['/topping']);
      return;
    }
    if (this.stage === Stage.Sweet) {
      this.stage = Stage.Ice;
      this._router.navigate(['/ice']);
      return;
    }
    if (this.stage === Stage.Recipe) {
      this.stage = Stage.Sweet;
      this._router.navigate(['/sweet']);
      return;
    }
  }

  reset() {
    this.stage = Stage.Drink;
    this._router.navigate(['/menu']);
    this.orderRequirement = {
      drinkId: null,
      size: Size.Regular,
      iceLevel: IceLevel.Regular,
      sweetLevel: SweetLevel.Regular,
      toppings: []
    };
    this.getDrinks().subscribe();
    this.getToppings().subscribe();
    this.getRecipes().subscribe();
  }
}
