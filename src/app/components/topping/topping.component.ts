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
    constructor(
        public menuService: MenuService
    ) { }

    ngOnInit() {
        this.menuService.getToppings().subscribe(toppings => {
            this.toppings = [...toppings];
        });
    }

    selectTopping(topping: Topping) {
        const { id } = topping;
        const hasSelected = this.menuService.orderRequirement.toppings.includes(id);
        if (hasSelected) {
            this.menuService.orderRequirement.toppings =
                this.menuService.orderRequirement.toppings.filter(t => t !== id);
        } else {
            this.menuService.orderRequirement.toppings.push(id);
        }
    }
}
