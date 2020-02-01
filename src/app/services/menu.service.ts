import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.model';
import { Router } from '@angular/router';
import { Topping } from '../models/topping.model';

export enum Stage {
    Drink,
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

    constructor(
        private _httpClient: HttpClient,
        private _router: Router
    ) {
        this.reset();
    }

    getDrinks(): Observable<Drink[]> {
        return this._httpClient.get<Drink[]>('assets/datas/drinks.json');
    }

    getToppings(): Observable<Topping[]> {
        return this._httpClient.get<Topping[]>('assets/datas/toppings.json');
    }

    next() {
        if (this.stage === Stage.Drink) {
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
        if (this.stage === Stage.Topping) {
            this.stage = Stage.Drink;
            this._router.navigate(['/menu']);
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
    }
}
