import { ApiService } from '@app/services/api.service';
import { Injectable } from '@angular/core';
import { LoginDto } from '@app/model/api.model';


@Injectable()
export class AuthService {

    constructor(
        private apiService: ApiService,
    ) { }

    async login(username: string, password: string): Promise<string> {

        const loginDto = new LoginDto();

        loginDto.email = username;
        loginDto.password = password;

        const response = await this.apiService.post(`account/login`, loginDto);

        return response.data;
    }
}
