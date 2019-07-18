import { Injectable, OnInit, Injector } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { SearchRequest, SearchResponse } from '@app/model/common.model';
import { ShipQuery, ShipCommand, ShipDetails } from '@app/model/api.model';

@Injectable()
export class ShipApiService {

    constructor(
        private apiService: ApiService,
    ) { }

    async loadShip(shipId: number): Promise<ShipDetails> {

        const response = await this.apiService.get(`ships/${shipId}`).toPromise();

        return response.data;
    }

    async searchShips(request?: SearchRequest<ShipQuery>): Promise<SearchResponse<ShipDetails>> {

        const response = await this.apiService.search('ships/search', request).toPromise();

        return response.data;
    }

    async createShip(cmd: ShipCommand) {

        await this.apiService.post(`ships`, cmd).toPromise();
    }

    async updateShip(id: number, cmd: ShipCommand) {

        await this.apiService.put(`ships/${id}`, cmd).toPromise();
    }

    async changeShipStatus(id: number, cmd: ShipCommand) {

        await this.apiService.put("ships/status", cmd).toPromise();
    }
}
