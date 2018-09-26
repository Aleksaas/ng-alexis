import { Injectable, OnInit, Injector } from '@angular/core';
import { ShipDetails, ShipCommand, ShipQuery } from '@app/model/ship.model';
import { ApiService } from '@app/services/api.service';
import { SearchRequest, SearchResult } from '@app/model/search.model';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ShipApiService {

    constructor(
        private apiService: ApiService,
    ) { }

    async loadShip(shipId: number): Promise<ShipDetails> {

        const response = await this.apiService.get(`ships/${shipId}`);

        return plainToClass(ShipDetails, response.data)[0];
    }

    async searchShips(request?: SearchRequest<ShipQuery>): Promise<SearchResult<ShipDetails>> {

        const response = await this.apiService.search('ships/search', request);

        response.data.result = plainToClass(ShipDetails, response.data.result);

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
