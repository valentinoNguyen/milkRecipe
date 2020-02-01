import { Component, OnInit } from '@angular/core';
import { MenuService, Stage } from 'src/app/services/menu.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
    Stage = Stage;
    constructor(public menuService: MenuService) {
    }

    get title(): string {
        const stage = this.menuService.stage;
        if (stage === Stage.Drink) {
            return 'Select Drink';
        }
        if (stage === Stage.Topping) {
            return 'Topping';
        }
        if (stage === Stage.Ice) {
            return 'Ice Level';
        }
        if (stage === Stage.Sweet) {
            return 'Sweet Level';
        }
        return 'Recipe';
    }

    back() {
        this.menuService.back();
    }

}
