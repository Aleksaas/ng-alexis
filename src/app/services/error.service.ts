import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';
import { ApiError } from '@app/model/common.model';

@Injectable()
export class ErrorService {

    constructor(private toastr: ToastrService) {

    }

    showMessage(error: ApiError) {
        if (error.isWarning) {
            this.toastr.warning(error.message);
        } else {
            this.toastr.error(error.message);
        }
    }

    clearMessages() {
        this.toastr.clear();
    }

    handleServerErrors(errors: ApiError[]) {

        this.clearMessages();

        errors.forEach(e => {
            this.showMessage(e);
        });
    }
}
