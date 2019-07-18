import { CustomerDetails, CustomerQuery } from '@app/model/api.model';
import { CustomersApiService } from '@app/services/api/customers.api.service';
import { SearchRequest, SearchResponse } from '@app/model/common.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CustomersService {

    private customerSearchRequest: SearchRequest<CustomerQuery> = new SearchRequest<CustomerQuery>();

    private customersSearchResponse: Subject<SearchResponse<CustomerDetails>> = new Subject<SearchResponse<CustomerDetails>>();
    customersSearchResponse$ = this.customersSearchResponse.asObservable();

    constructor(private customersApiService: CustomersApiService) {

    }

    async setCurrentPage(page: number) {
        this.customerSearchRequest.pageNumber = page;
        await this.searchCustomers();
    }

    setSearchQuery(searchTerm: string) {
        this.customerSearchRequest.query = new CustomerQuery();
        this.customerSearchRequest.query.name = searchTerm;
        return this.searchCustomers();
    }

    private searchCustomers() {
        return this.customersApiService.searchCustomers(this.customerSearchRequest).pipe(
            tap(response => this.customersSearchResponse.next(response))
        );
    }
}
