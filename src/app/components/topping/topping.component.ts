import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Topping } from 'src/app/models/topping.model';

@Component({
    selector: 'app-topping',
    templateUrl: './topping.component.html',
    styleUrls: ['./topping.component.scss']
})
export class ToppingComponent implements OnInit {
    toppings: Topping[];
    selectedToppingId: number;
    constructor(private menuService: MenuService) { }

    ngOnInit() {
        this.menuService.getToppings().subscribe(toppings => {
            console.log(toppings);
            this.toppings = [...toppings];
        });
    }

    selectTopping(topping: Topping) {
        this.selectedToppingId = topping.id;
    }
}
