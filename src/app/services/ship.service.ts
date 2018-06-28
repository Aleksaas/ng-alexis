import { BaseService } from './base.service';
import { Injectable, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipDto } from '@app/model/ship.model';
import { Events } from '@app/enums/events.enum';

@Injectable()
export class ShipService extends BaseService {

    sideNavigationShips: ShipDto[];

    get shipsCount() {
        return this.sideNavigationShips !== undefined ? this.sideNavigationShips.length : 0;
    }

    constructor(injector: Injector) {

        super(injector);

        this.route = 'ships';

        this.subscribe();
    }

    // Read operations

    async loadSideNavigationShips() {
        const response = await this.search();
        this.sideNavigationShips = response.data.result;
    }

    // Subscribe to events

    subscribe() {
        this.eventService.subscribe(Events.CUSTOMER_CHANGED, () => {
            this.loadSideNavigationShips();
        });
    }

    // CUD operations

    async createShip(ship: ShipDto) {

        await this.create(ship);
        this.loadSideNavigationShips();
    }

    async updateShip(id: number, ship: ShipDto) {

        await this.update(id, ship);
        this.loadSideNavigationShips();
        this.eventService.sendEvent(Events.SHIP_UPDATED);
    }
}
