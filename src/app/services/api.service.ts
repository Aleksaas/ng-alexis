import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { ApiResponse } from '@app/model/common.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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
            'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT',
            'Accept-Language': 'en'
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

    async get<T>(path: string, params?: any): Promise<ApiResponse<T>> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .get<ApiResponse<T>>(`${API_URL}/${path}`, this.options)
            .pipe(map((res) => { this.requestNum--; return res; }), catchError(err => this.handleError(err))
        ).toPromise();
    }

    async post<T>(path: string, data: any, params?: any): Promise<ApiResponse<T>> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .post<ApiResponse<T>>(`${API_URL}/${path}`, data, this.options)
            .pipe(map((res) => { this.requestNum--; return res; }), catchError(err => this.handleError(err))
        ).toPromise();
    }

    async put<T>(path: string, data: any, params?: any): Promise<ApiResponse<T>> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .put<ApiResponse<T>>(`${API_URL}/${path}`, data, this.options)
            .pipe(map((res) => { this.requestNum--; return res; }), catchError(err => this.handleError(err))
        ).toPromise();
    }

    async delete<T>(path: string, params?: any): Promise<ApiResponse<T>> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .delete<ApiResponse<T>>(`${API_URL}/${path}`, this.options)
            .pipe(map((res) => { this.requestNum--; return res; }), catchError(err => this.handleError(err))
        ).toPromise();
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

        return throwError(error);
    }
}
