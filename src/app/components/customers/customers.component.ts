import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

    constructor(private customerService: CustomersService) { }

    ngOnInit() {

    }

}
