import { BaseService } from './base.service';
import { Injectable, OnInit, Injector } from '@angular/core';
import { ShipDetails, ShipCommand, ShipQuery } from '@app/model/ship.model';
import { Events } from '@app/enums/events.enum';
import { SearchResult, SearchRequest } from '@app/model/search.model';
import { ApiService } from '@app/services/api.service';
import { ApiResponse } from '@app/model/common.model';

@Injectable()
export class ShipService extends ApiService {

    constructor(injector: Injector) {

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
        this.sideNavigationShips = (await this.searchShips()).data.result;
    }

    /************************* Ship form *************************/

    currentShip: ShipDetails;

    async loadShip(shipId: number) {
        this.currentShip = (await this.get<ShipDetails>(`ships/${shipId}`)).data;
    }

    async searchShips(request?: SearchRequest<ShipQuery>) {
        return await this.search<ShipDetails>('ships/search', request);
    }

    async createShip(cmd: ShipCommand) {

        await this.post<ShipDetails>(`ships`, cmd);
        this.loadSideNavigationShips();
    }

    async updateShip(id: number, cmd: ShipCommand) {

        await this.put<ShipDetails>(`ships/${id}`, cmd);
        this.loadShip(id);
    }

    async changeShipStatus(id: number, cmd: ShipCommand) {

        await this.put<ShipDetails>("ships/status", cmd);
        this.loadShip(id);
    }

    /************************* Subscribe to events *************************/

    subscribe() {
        this.eventService.subscribe(Events.CUSTOMER_CHANGED, () => {
            this.loadSideNavigationShips();
        });
    }
}
