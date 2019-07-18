import { CustomerDetails } from '@app/model/api.model';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { SearchRequest, SearchResponse } from '@app/model/common.model';
import { CustomerQuery } from '@app/model/api.model';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class CustomersApiService {

    constructor(
        private apiService: ApiService,
    ) { }

    searchCustomers(request?: SearchRequest<CustomerQuery>): Observable<SearchResponse<CustomerDetails>> {

        return this.apiService.search('customers/search', request).pipe(map(response => response.data));
    }
}
