import { SearchRequest } from './../../../model/search.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShipService } from '@app/services/ship.service';
import { Observable, Subject } from 'rxjs';
import { ApiResponse } from '@app/model/common.model';

@Component({
    selector: 'ships-list',
    templateUrl: 'ships-list.component.html'
})

export class ShipsListComponent implements OnInit {

    constructor(
        private shipService: ShipService,
        private http: HttpClient
    ) { }

    ships$: Observable<any>

    ships: any

    shipsSub$: Subject<any> = new Subject()

    ngOnInit() {

        this.shipService.loadSideNavigationShips();

        this.ships$ = this.http
            .post<ApiResponse<any>>(`http://localhost:47858/api/ships/search`, new SearchRequest())

        // this.ships$.subscribe(response => {
        //     this.ships = response;
        // });

        this.shipsSub$.subscribe(response => {
            this.ships = response.data.result[0].id;
        });
    }

    async reload() {
        const response = await this.http
            .post<ApiResponse<any>>(`http://localhost:47858/api/ships/search`, new SearchRequest()).toPromise()

        this.shipsSub$.next(response)
    }
}
