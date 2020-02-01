import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Drink } from 'src/app/models/drink.model';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    drinks: Drink[];
    drinkResults: Drink[];
    selectedDrinkId: number;
    searchControl = new FormControl();
    constructor(private menuService: MenuService) { }

    ngOnInit() {
        this.menuService.getDrinks().subscribe(drinks => {
            console.log(drinks);
            this.drinks = [...drinks];
            this.drinkResults = [...drinks];
        });

        this.searchControl.valueChanges.subscribe(searchValue => {
            const key = searchValue.toLocaleLowerCase();
            if (key.length > 0) {
                this.drinkResults = this.drinks.filter(d => d.name.toLocaleLowerCase().includes(key));
            } else {
                this.drinkResults = [...this.drinks];
            }
        });
    }

    selectDrink(drink: Drink) {
        this.selectedDrinkId = drink.id;
    }

    clearSearch() {
        this.searchControl.reset();
        this.drinkResults = [...this.drinks];
    }
}
