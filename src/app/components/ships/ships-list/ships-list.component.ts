import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiResponse, SearchRequest } from '@app/model/common.model';
import { ShipService } from '@app/components/ships/ship.service';

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
            .post<ApiResponse>(`http://localhost:47858/api/ships/search`, new SearchRequest())

        // this.ships$.subscribe(response => {
        //     this.ships = response;
        // });

        this.shipsSub$.subscribe(response => {
            this.ships = response.data.result[0].id;
        });

        const observable = Observable.create(function (source) {
            setInterval(() => source.next(Math.random()), 2000);
        });

        observable.subscribe(response => console.log(response))
    }

    async reload() {
        const response = await this.http
            .post<ApiResponse>(`http://localhost:47858/api/ships/search`, new SearchRequest()).toPromise()

        this.shipsSub$.next(response)
    }
}
