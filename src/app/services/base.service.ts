import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { EventService } from '@app/services/event.service';
import { ApiResponse } from '@app/model/common.model';
import { SearchRequest } from '@app/model/search.model';

/**
 * This is base service for all API calls. No API call should be done outside this service.
 */
@Injectable()
export class BaseService extends ApiService {

    protected route: string;

    protected eventService: EventService;

    constructor(protected injector: Injector) {

        super(injector);

        this.eventService = injector.get(EventService);
    }

    search<T>(searchRequest?: SearchRequest): Promise<ApiResponse<T>> {

        if (!searchRequest) {
            searchRequest = new SearchRequest();
        }

        return this.post(`${this.route}/search`, searchRequest);
    }

    get<T>(id: any): Promise<ApiResponse<T>> {
        return this.get(`${this.route}/${id}`);
    }

    update<T>(id: number, payload: any): Promise<ApiResponse<T>> {
        return this.put(`${this.route}/${id}`, payload);
    }

    create<T>(payload: any): Promise<ApiResponse<T>> {
        return this.post(`${this.route}`, payload);
    }

    remove<T>(id: number): Promise<ApiResponse<T>> {
        return this.delete(`${this.route}/${id}`);
    }
}

