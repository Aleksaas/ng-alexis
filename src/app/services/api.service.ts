import { JwtService } from './auth/jwt.service';
import { ErrorService } from '@app/services/error.service';
import { Injectable, Injector, inject } from '@angular/core';
import { environment } from '@env/environment';
import { SearchRequest } from '@app/model/common.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { EventService } from '@app/services/event.service';
import { throwError, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalVariables } from '@app/global';


const API_URL = environment.serverUrl;

@Injectable()
export class ApiService {

    options: {
        headers: HttpHeaders
    };

    requestNum = 0;

    showLoader = false;

    timeouts = [];

    protected eventService: EventService;
    protected errorService: ErrorService;
    protected router: Router;
    protected toastr: ToastrService;
    protected jwtService: JwtService;

    private http: HttpClient;

    constructor(protected injector: Injector) {

        this.eventService = injector.get(EventService);
        this.errorService = injector.get(ErrorService);
        this.router = injector.get(Router);
        this.toastr = injector.get(ToastrService);
        this.jwtService = injector.get(JwtService);

        this.http = injector.get(HttpClient);

        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + this.jwtService.getRawToken()
        });

        this.options = {
            headers: headers
        };

        setInterval(() => {
            if (this.requestNum > 0) {
                const t = setTimeout(() => {
                    if (this.requestNum > 0) {
                        this.showLoader = true;
                    }
                }, 400);
                this.timeouts.push(t);
            } else {
                if (this.requestNum === 0) {
                    for (let i = 0; i < this.timeouts.length; i++) {
                        clearTimeout(this.timeouts[i]);
                    }
                    this.timeouts = [];
                    this.showLoader = false;
                }
            }
        }, 100);
    }

    search(path: string, searchRequest?: SearchRequest<any>): Observable<any> {

        if (!searchRequest) {
            searchRequest = new SearchRequest<any>();
        }

        return this.post(path, searchRequest);
    }

    get(path: string, params?: any): Observable<any> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .get<any>(`${API_URL}/${path}`, this.options)
            .pipe(map((res) => { this.requestNum--; return res; }), catchError(err => this.handleError(err))
        );
    }

    post(path: string, data: any, params?: any): Observable<any> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .post<any>(`${API_URL}/${path}`, data, this.options)
            .pipe(map((res) => { this.errorService.clearMessages(); this.requestNum--; return res; }),
                catchError(err => this.handleError(err))
        );
    }

    put(path: string, data: any, params?: any): Observable<any> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .put<any>(`${API_URL}/${path}`, data, this.options)
            .pipe(map((res) => { this.errorService.clearMessages(); this.requestNum--; return res; }),
                catchError(err => this.handleError(err))
        );
    }

    delete<T>(path: string, params?: any): Observable<any> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .delete<any>(`${API_URL}/${path}`, this.options)
            .pipe(map((res) => { this.errorService.clearMessages(); this.requestNum--; return res; }),
                catchError(err => this.handleError(err))
        );
    }

    private handleError(response: any) {

        console.log('ApiService::handleError: ', response);

        this.requestNum--;

        switch (response.status) {
            case 400:
                this.errorService.handleServerErrors(response.error.errors);
                break;
            case 401:
                this.router.navigate(['/login']);
                break;
            case 403:
                this.router.navigate(['/login']);
                break;
            case 500:
                this.toastr.error(GlobalVariables.Translations["SomethingWrongMessage"]);
                break;
        }

        return throwError(response);
    }
}
