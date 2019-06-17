import { CustomerDetails } from './../../model/api.model';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { SearchRequest, SearchResponse } from '@app/model/common.model';
import { CustomerQuery } from '@app/model/api.model';

@Injectable({
    providedIn: 'root'
})
export class CustomersApiService {

    constructor(
        private apiService: ApiService,
    ) { }

    async searchCustomers(request?: SearchRequest<CustomerQuery>): Promise<SearchResponse<CustomerDetails>> {

        const response = await this.apiService.search('customers/search', request);

        return response.data;
    }
}
