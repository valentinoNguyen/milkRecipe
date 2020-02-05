import { OrderRequirement } from './../../models/order-requirement.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';
import { MenuService } from 'src/app/services/menu.service';
import { Drink } from 'src/app/models/drink.model';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
    recipe: Recipe;
    drink: Drink;
    constructor(
        private menuService: MenuService,
        private recipeService: RecipeService,
    ) { }

    ngOnInit() {
        const { orderRequirement } = this.menuService;
        const recipe = this.recipeService.getRecipeByDrink(orderRequirement);
        this.recipe = this.recipeService.getFinalRecipe(recipe, orderRequirement);
        console.log(this.recipe);
        this.drink = this.menuService.drinkHash[this.recipe.drinkId];
    }

}
