import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Drink } from 'src/app/models/drink.model';
import { FormControl } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    drinks: Drink[];
    drinkResults: Drink[];
    searchControl = new FormControl();
    constructor(
        public menuService: MenuService,
        public recipeService: RecipeService,
    ) { }

    ngOnInit() {
        this.menuService.getDrinks().subscribe(drinks => {
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
        this.menuService.orderRequirement.drinkId = drink.id;
        this.menuService.orderRequirement.toppings =
            this.recipeService.getToppingsByDrink(drink.id).map(t => t.id);
    }

    clearSearch() {
        this.searchControl.reset();
        this.drinkResults = [...this.drinks];
    }
}
