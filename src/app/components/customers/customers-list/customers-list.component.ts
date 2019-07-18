import { CustomersService } from '@app/components/customers/customers.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap, switchMap, debounce } from 'rxjs/operators';
import { Observable, noop } from 'rxjs';
import { SearchResponse } from '@app/model/common.model';
import { CustomerDetails } from '@app/model/api.model';

@Component({
    selector: 'customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

    searchForm: FormGroup;

    searchResponse$: Observable<SearchResponse<CustomerDetails>> = this.customerService.customersSearchResponse$;

    constructor(private customerService: CustomersService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            searchTerm: '',
        });

        this.searchForm.get('searchTerm').valueChanges.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap((searchTerm) => this.customerService.setSearchQuery(searchTerm))
        ).subscribe(() => noop);

        this.setPage({ offset: 0 });
    }

    setPage(pageInfo: any) {
        this.customerService.setCurrentPage(pageInfo.offset);
    }

    setSort($event: any) {
        console.log($event);
    }
}
