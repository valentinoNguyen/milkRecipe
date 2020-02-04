import { Component, OnInit } from '@angular/core';
import { SweetLevel } from 'src/app/models/menu.enum';
import { MenuService } from 'src/app/services/menu.service';

@Component({
    selector: 'app-sweet-level',
    templateUrl: './sweet-level.component.html',
    styleUrls: ['./sweet-level.component.scss']
})
export class SweetLevelComponent implements OnInit {

    sweetLevels = [
        {
            value: SweetLevel.Regular,
            label: 'Regular'
        },
        {
            value: SweetLevel.Less,
            label: 'Less'
        },
        {
            value: SweetLevel.Half,
            label: 'Half'
        },
        {
            value: SweetLevel.Little,
            label: 'Little'
        },
    ]
    constructor(
        public menuService: MenuService
    ) { }

    ngOnInit() {
    }

    selectSweetLevel(sweetLevel: SweetLevel) {
        this.menuService.orderRequirement.sweetLevel = sweetLevel;
    }

}
