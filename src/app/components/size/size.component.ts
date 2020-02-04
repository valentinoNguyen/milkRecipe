import { Component, OnInit } from '@angular/core';
import { Size } from 'src/app/models/menu.enum';
import { MenuService } from 'src/app/services/menu.service';

@Component({
    selector: 'app-size',
    templateUrl: './size.component.html',
    styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
    sizes = [
        {
            value: Size.Regular,
            label: 'Regular'
        },
        {
            value: Size.Large,
            label: 'Large'
        },
    ]
    constructor(
        public menuService: MenuService
    ) { }

    ngOnInit() {
    }

    selectSize(size: Size) {
        this.menuService.orderRequirement.size = size;
    }

}
