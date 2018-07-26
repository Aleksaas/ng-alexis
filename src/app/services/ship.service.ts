import { BaseService } from './base.service';
import { Injectable, OnInit, Injector } from '@angular/core';
import { ShipDetails, ShipCommand } from '@app/model/ship.model';
import { Events } from '@app/enums/events.enum';
import { SearchResult } from '@app/model/search.model';

@Injectable()
export class ShipService extends BaseService {

    constructor(injector: Injector) {

        super(injector);

        this.route = 'ships';

        this.subscribe();
    }

    /************************* Sidebar navigation and ship selection *************************/

    sideNavigationShips: ShipDetails[];

    get shipsCount() {
        return this.sideNavigationShips !== undefined ? this.sideNavigationShips.length : 0;
    }

    private _selectedShip: ShipDetails;

    setSelected(shipId: number) {
        this._selectedShip = this.sideNavigationShips.filter(s => s.id == shipId)[0];
    }

    get selectedShip() {
        if (this.sideNavigationShips == undefined) {
            return undefined;
        }

        return this._selectedShip != undefined ? this._selectedShip : this.sideNavigationShips[0];
    }

    isSelected(shipId: number) {
        return this.selectedShip.id == shipId;
    }

    clearSelected() {
        this._selectedShip = undefined;
    }

    async loadSideNavigationShips() {
        this.sideNavigationShips = (await this.search<SearchResult>()).data.result;
    }

    /************************* Ship form *************************/

    currentShip: ShipDetails;

    async loadShip(shipId: number) {
        this.currentShip = (await this.get<ShipDetails>(shipId)).data;
    }

    async createShip(ship: ShipDetails) {

        await this.create<ShipDetails>(ship);
        this.loadSideNavigationShips();
    }

    async updateShip(id: number, ship: ShipDetails) {

        await this.update<ShipDetails>(id, ship);
        this.loadShip(id);
    }

    async changeShipStatus(id: number, cmd: ShipCommand) {

        await this.put("ships/status", cmd);
        this.loadShip(id);
    }

    /************************* Subscribe to events *************************/

    subscribe() {
        this.eventService.subscribe(Events.CUSTOMER_CHANGED, () => {
            this.loadSideNavigationShips();
        });
    }
}
