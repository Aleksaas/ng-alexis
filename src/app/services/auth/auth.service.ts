import { JwtService } from '@app/services/auth/jwt.service';
import { ApiService } from '@app/services/api.service';
import { Injectable } from '@angular/core';
import { LoginCommand } from '@app/model/api.model';


@Injectable()
export class AuthService {

    currentUser: any;

    constructor(
        private apiService: ApiService,
        private jwtService: JwtService
    ) { }

    async login(loginCommand: LoginCommand): Promise<any> {

        const response = await this.apiService.post(`account/login`, loginCommand);

        this.jwtService.saveToken(response.data);

        this.loadUser();
    }

    loadUser() {
        this.currentUser = this.jwtService.getToken();

        console.dir(this.currentUser);
    }

    isAuthenticated() {
        return this.currentUser != null;
    }
}
