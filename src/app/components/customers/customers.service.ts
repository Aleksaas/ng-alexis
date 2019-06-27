import { CustomerDetails, CustomerQuery } from '@app/model/api.model';
import { CustomersApiService } from '@app/services/api/customers.api.service';
import { SearchRequest, SearchResponse } from '@app/model/common.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomersService {

    customerSearchRequest: SearchRequest<CustomerQuery> = new SearchRequest<CustomerQuery>();

    customersSearchResponse: SearchResponse<CustomerDetails> = new SearchResponse<CustomerDetails>();

    constructor(private customersApiService: CustomersApiService) {

    }

    async setCurrentPage(page: number) {
        this.customerSearchRequest.pageNumber = page;
        await this.searchCustomers();
    }

    async setSearchQuery(query: CustomerQuery) {
        this.customerSearchRequest.query = query;
        await this.searchCustomers();
    }

    private async searchCustomers() {
        this.customersSearchResponse = await this.customersApiService.searchCustomers(this.customerSearchRequest);
    }
}
