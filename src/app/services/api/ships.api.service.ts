import { Injectable, OnInit, Injector } from '@angular/core';
import { ShipDetails, ShipCommand, ShipQuery } from '@app/model/ship.model';
import { ApiService } from '@app/services/api.service';
import { SearchRequest, SearchResult } from '@app/model/search.model';

@Injectable()
export class ShipApiService {

    constructor(
        private apiService: ApiService,
    ) { }

    async loadShip(shipId: number): Promise<ShipDetails> {

        const response = await this.apiService.get(`ships/${shipId}`);

        return response.data;
    }

    async searchShips(request?: SearchRequest<ShipQuery>): Promise<SearchResult<ShipDetails>> {

        const response = await this.apiService.search('ships/search', request);

        return response.data;
    }

    async createShip(cmd: ShipCommand) {

        await this.apiService.post(`ships`, cmd);
    }

    async updateShip(id: number, cmd: ShipCommand) {

        await this.apiService.put(`ships/${id}`, cmd);
    }

    async changeShipStatus(id: number, cmd: ShipCommand) {

        await this.apiService.put("ships/status", cmd);
    }
}
