import { Component, OnInit } from '@angular/core';
import { IceLevel } from 'src/app/models/menu.enum';
import { MenuService } from 'src/app/services/menu.service';

@Component({
    selector: 'app-ice-level',
    templateUrl: './ice-level.component.html',
    styleUrls: ['./ice-level.component.scss']
})
export class IceLevelComponent implements OnInit {
    iceLevels = [
        {
            value: IceLevel.Regular,
            label: 'Regular'
        },
        {
            value: IceLevel.LessIce,
            label: 'Less Ice'
        },
        {
            value: IceLevel.NoIce,
            label: 'No Ice'
        },
    ]
    constructor(
        public menuService: MenuService
    ) { }

    ngOnInit() {
    }

    selectIceLevel(iceLevel: IceLevel) {
        this.menuService.orderRequirement.iceLevel = iceLevel;
    }

}
