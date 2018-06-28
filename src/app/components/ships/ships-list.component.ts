import { Component, OnInit } from '@angular/core';
import { ShipService } from '@app/services/ship.service';
import { Observable } from 'rxjs';
import { ShipDto } from '@app/model/ship.model';

@Component({
    selector: 'ship-list',
    templateUrl: 'ship-list.component.html'
})

export class ShipListComponent implements OnInit {

    sideNavigationShips: ShipDto[];

    constructor(
        private shipService: ShipService
    ) { }

    ngOnInit() {
        this.shipService.sideNavigationShips$.subscribe(response => {
            this.sideNavigationShips = response;
        });

        this.shipService.loadSideNavigationShips();
    }
}
