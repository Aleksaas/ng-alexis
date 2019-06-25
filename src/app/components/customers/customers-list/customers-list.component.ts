import { CustomersService } from '@app/components/customers/customers.service';
import { CustomerQuery, CustomerDetails } from '@app/model/api.model';
import { Component, OnInit } from '@angular/core';
import { SearchResponse, SearchRequest } from '@app/model/common.model';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

    customersSearchResponse: SearchResponse<CustomerDetails> = new SearchResponse<CustomerDetails>();

    constructor(private customerService: CustomersService) { }

    ngOnInit() {
        this.setPage({ offset: 0 });
    }

    /**
    * Populate the table with new data based on the page number
    * @param page The page to select
    */
    async setPage(pageInfo: any) {
        const request = new SearchRequest<CustomerQuery>();

        request.pageNumber = pageInfo.offset;

        this.customersSearchResponse = await this.customerService.searchCustomers(request);
    }

    onSort($event: any) {
        console.log($event);
    }

}
