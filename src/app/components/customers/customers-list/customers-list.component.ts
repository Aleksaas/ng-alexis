import { CustomersService } from '@app/components/customers/customers.service';
import { CustomerQuery, CustomerDetails } from '@app/model/api.model';
import { Component, OnInit } from '@angular/core';
import { SearchResponse, SearchRequest } from '@app/model/common.model';

@Component({
    selector: 'customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

    constructor(private customerService: CustomersService) { }

    ngOnInit() {
        this.setPage({ offset: 0 });
    }

    setPage(pageInfo: any) {
        this.customerService.setCurrentPage(pageInfo.offset);
    }

    setSort($event: any) {
        console.log($event);
    }

}
