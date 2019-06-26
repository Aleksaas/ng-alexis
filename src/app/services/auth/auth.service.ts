import { ApiService } from '@app/services/api.service';
import { Injectable } from '@angular/core';
import { LoginCommand } from '@app/model/api.model';


@Injectable()
export class AuthService {

    constructor(
        private apiService: ApiService,
    ) { }

    async login(loginCommand: LoginCommand): Promise<string> {

        const response = await this.apiService.post(`account/login`, loginCommand);

        console.log(response);

        return response.data;
    }
}
