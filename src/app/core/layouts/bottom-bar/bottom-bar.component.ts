import { Component, OnInit } from '@angular/core';
import { MenuService, Stage } from 'src/app/services/menu.service';

@Component({
    selector: 'app-bottom-bar',
    templateUrl: './bottom-bar.component.html',
    styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent {
    Stage = Stage;
    constructor(public menuService: MenuService) {
    }

    nextOrNewDrink() {
        if (this.menuService.stage !== Stage.Recipe) {
            this.menuService.next();
        } else {
            this.menuService.reset();
        }
    }
}
