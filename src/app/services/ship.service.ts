import { BaseService } from './base.service';
import { Injectable, OnInit, Injector } from '@angular/core';
import { ShipDto, ShipCmd } from '@app/model/ship.model';
import { Events } from '@app/enums/events.enum';
import { SearchResult } from '@app/model/common.model';

@Injectable()
export class ShipService extends BaseService {

    constructor(injector: Injector) {

        super(injector);

        this.route = 'ships';

        this.subscribe();
    }

    /************************* Sidebar navigation and ship selection *************************/

    sideNavigationShips: ShipDto[];

    get shipsCount() {
        return this.sideNavigationShips !== undefined ? this.sideNavigationShips.length : 0;
    }

    private _selectedShip: ShipDto;

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

    currentShip: ShipDto;

    async loadShip(shipId: number) {
        this.currentShip = (await this.get<ShipDto>(shipId)).data;
    }

    async createShip(ship: ShipDto) {

        await this.create<ShipDto>(ship);
        this.loadSideNavigationShips();
    }

    async updateShip(id: number, ship: ShipDto) {

        await this.update<ShipDto>(id, ship);
        this.loadShip(id);
    }

    async changeShipStatus(id: number, cmd: ShipCmd) {

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
