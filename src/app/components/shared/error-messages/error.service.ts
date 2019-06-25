import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';
import { ApiError } from '@app/model/common.model';

@Injectable()
export class ErrorService {

    private messageSource = new Subject<ApiError>();
    private clearSource = new Subject();

    messageSource$ = this.messageSource.asObservable();
    clearSource$ = this.clearSource.asObservable();

    triggerMessage(error: ApiError) {
        this.messageSource.next(error);
    }

    triggerClear() {
        this.clearSource.next();
    }

    handleServerErrors(errors: ApiError[]) {

        this.triggerClear();

        errors.forEach(e => {
            this.triggerMessage(e);
        });
    }
}
