import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.model';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor(
        private _httpClient: HttpClient
    ) { }

    getDrinks(): Observable<Drink[]> {
        return this._httpClient.get<Drink[]>('assets/datas/drinks.json');
    }
}
