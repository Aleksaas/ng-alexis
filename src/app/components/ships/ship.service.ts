
import { Injectable, OnInit, Injector } from '@angular/core';
import { Events } from '@app/enums/events.enum';
import { ApiService } from '@app/services/api.service';
import { ShipApiService } from '@app/services/api/ships.api.service';
import { ShipDetails, ShipCommand } from '@app/model/api.model';

@Injectable()
export class ShipService extends ApiService {

    constructor(injector: Injector, private shipsApi: ShipApiService) {

        super(injector);

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
        this.sideNavigationShips = (await this.shipsApi.searchShips()).result;
    }

    /************************* Ship form *************************/

    currentShip: ShipDetails;

    async loadShip(shipId: number) {
        this.currentShip = await this.shipsApi.loadShip(shipId);
    }

    async createShip(cmd: ShipCommand) {

        await this.shipsApi.createShip(cmd);
        this.loadSideNavigationShips();
    }

    async updateShip(id: number, cmd: ShipCommand) {

        await this.shipsApi.updateShip(id, cmd);
        this.loadShip(id);
    }

    async changeShipStatus(id: number, cmd: ShipCommand) {

        await this.shipsApi.changeShipStatus(id, cmd);
        this.loadShip(id);
    }

    /************************* Subscribe to events *************************/

    subscribe() {
        this.eventService.subscribe(Events.CUSTOMER_CHANGED, () => {
            this.loadSideNavigationShips();
        });
    }
}
