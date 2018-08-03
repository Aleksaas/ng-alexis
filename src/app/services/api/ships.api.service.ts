import { Injectable, OnInit, Injector } from '@angular/core';
import { ShipDetails, ShipCommand, ShipQuery } from '@app/model/ship.model';
import { ApiService } from '@app/services/api.service';
import { SearchRequest } from '@app/model/search.model';

@Injectable()
export class ShipApiService extends ApiService {

    constructor(injector: Injector) {

        super(injector);
    }

    async loadShip(shipId: number) {
        return (await this.get<ShipDetails>(`ships/${shipId}`)).data;
    }

    async searchShips(request?: SearchRequest<ShipQuery>) {
        return await this.search<ShipListItem>('ships/search', request);
    }

    async createShip(cmd: ShipCommand) {

        await this.post<ShipDetails>(`ships`, cmd);
    }

    async updateShip(id: number, cmd: ShipCommand) {

        await this.put<ShipDetails>(`ships/${id}`, cmd);
    }

    async changeShipStatus(id: number, cmd: ShipCommand) {

        await this.put<ShipDetails>("ships/status", cmd);
    }
}
