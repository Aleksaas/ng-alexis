import { BaseService } from './base.service';
import { Injectable, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipDto } from '@app/model/ship.model';
import { Events } from '@app/enums/events.enum';
import { SearchResult } from '@app/model/common.model';

@Injectable()
export class ShipService extends BaseService {

    constructor(injector: Injector) {

        super(injector);

        this.route = 'ships';

        this.subscribe();
    }

    sideNavigationShips: ShipDto[];

    get shipsCount() {
        return this.sideNavigationShips !== undefined ? this.sideNavigationShips.length : 0;
    }

    /************************* Ship selection *************************/

    _selectedShip: ShipDto;

    setSelected(shipId: number) {
        this._selectedShip = this.sideNavigationShips.filter(s => s.id == shipId)[0];
    }

    get selectedShip() {
        if (this.sideNavigationShips == undefined) {
            return undefined;
        }

        return this._selectedShip != undefined ? this._selectedShip : this.sideNavigationShips[0];
    }

    /************************* Subscribe to events *************************/

    subscribe() {
        this.eventService.subscribe(Events.CUSTOMER_CHANGED, () => {
            this.loadSideNavigationShips();
        });
    }

    /************************* API calls *************************/

    async loadSideNavigationShips() {
        this.sideNavigationShips = (await this.search<SearchResult>()).data.result;
    }

    async createShip(ship: ShipDto) {

        await this.create<ShipDto>(ship);
        this.loadSideNavigationShips();
    }

    async updateShip(id: number, ship: ShipDto) {

        await this.update<ShipDto>(id, ship);
        this.loadSideNavigationShips();
        this.eventService.sendEvent(Events.SHIP_UPDATED);
    }
}
