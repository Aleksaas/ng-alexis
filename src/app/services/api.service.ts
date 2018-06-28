import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { ApiResponse } from '@app/model/common.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


const API_URL = environment.serverUrl;

/**
 * This service should be inherited only by base service.
 */
@Injectable()
export class ApiService {

    options: {
        headers: HttpHeaders
    };

    requestNum = 0;

    showLoader = false;

    timeouts = [];

    private http: HttpClient;

    constructor(protected injector: Injector) {

        this.http = injector.get(HttpClient);

        const headers = new HttpHeaders({
            'X-Requested-With': 'XMLHttpRequest',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
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

    public get(path: string, params?: any): Observable<any> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .get<ApiResponse>(`${API_URL}/${path}`, this.options)
            .pipe(map((res) => { this.requestNum--; return res.data; }), catchError(err => this.handleError(err))
        );
    }

    public post(path: string, data: any, params?: any): Observable<any> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .post<ApiResponse>(`${API_URL}/${path}`, data, this.options)
            .pipe(map((res) => { this.requestNum--; return res.data; }), catchError(err => this.handleError(err))
        );
    }

    public put(path: string, data: any, params?: any): Observable<any> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .put<ApiResponse>(`${API_URL}/${path}`, data, this.options)
            .pipe(map((res) => { this.requestNum--; return res.data; }), catchError(err => this.handleError(err))
        );
    }

    public delete(path: string, params?: any): Observable<any> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .delete<ApiResponse>(`${API_URL}/${path}`, this.options)
            .pipe(map((res) => { this.requestNum--; return res.data; }), catchError(err => this.handleError(err))
        );
    }

    private handleError(error: any) {

        console.log('ApiService::handleError: ', error);

        this.requestNum--;

        switch (error.status) {
            case 401:
                // Show modal
                break;
            case 403:
                // Show modal
                break;
            case 500:
                // Show modal
                break;
        }

        return Observable.throw(error);
    }
}