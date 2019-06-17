import { CustomerDetails, CustomerQuery } from './../../model/api.model';
import { CustomersApiService } from '@app/services/api/customers.api.service';
import { SearchRequest, SearchResponse } from '@app/model/common.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomersService {

    customers: CustomerDetails[];

    constructor(private customersApiService: CustomersApiService) {

    }

    async searchCustomers(request?: SearchRequest<CustomerQuery>): Promise<SearchResponse<CustomerDetails>> {

        const response = await this.customersApiService.searchCustomers(request);

        return response;
    }
}
