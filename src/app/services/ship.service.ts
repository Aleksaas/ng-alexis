import { BaseService } from './base.service';
import { Injectable, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipDto } from '@app/model/ship.model';
import { Events } from '@app/enums/events.enum';

@Injectable()
export class ShipService extends BaseService {

    sideNavigationShips$: Observable<ShipDto[]>;

    constructor(injector: Injector) {

        super(injector);

        this.subscribe();
    }

    // Read operations

    loadSideNavigationShips() {
        this.sideNavigationShips$ = this.search();
    }

    // Subscribe to events

    subscribe() {
        this.eventService.subscribe(Events.CUSTOMER_CHANGED, () => {
            this.loadSideNavigationShips();
        });
    }

    // CUD operations

    createShip(ship: ShipDto) {

        this.create(ship).subscribe(response => {
            this.loadSideNavigationShips();
            this.eventService.sendEvent(Events.SHIP_CREATED);
        });
    }

    updateShip(id: number, ship: ShipDto) {

        this.update(id, ship).subscribe(response => {
            this.loadSideNavigationShips();
        });
    }
}
