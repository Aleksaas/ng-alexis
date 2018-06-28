import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShipService } from '@app/services/ship.service';
import { Observable } from 'rxjs';
import { ShipDto } from '@app/model/ship.model';

@Component({
    selector: 'ships-list',
    templateUrl: 'ships-list.component.html'
})

export class ShipsListComponent implements OnInit {

    constructor(
        private shipService: ShipService
    ) { }

    ngOnInit() {

        this.shipService.loadSideNavigationShips();
    }
}
