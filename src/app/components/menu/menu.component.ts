import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    constructor(private menuService: MenuService) { }

    ngOnInit() {
        this.menuService.getDrinks().subscribe(res => {
            console.log(res);
        });
    }

}
