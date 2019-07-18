import { JwtService } from '@app/services/auth/jwt.service';
import { ApiService } from '@app/services/api.service';
import { Injectable } from '@angular/core';
import { LoginCommand } from '@app/model/api.model';
import { UserToken } from '@app/model/common.model';
import { Router } from '@angular/router';
import { Roles } from '@app/model/enum';
import * as _ from 'lodash';


@Injectable()
export class AuthService {

    currentUser: UserToken;

    constructor(
        private apiService: ApiService,
        private jwtService: JwtService,
        private router: Router
    ) { }

    async login(loginCommand: LoginCommand): Promise<any> {

        const response = await this.apiService.post(`account/login`, loginCommand);

        // this.jwtService.saveToken(response.data);

        this.loadUser();
    }

    async logout() {
        this.jwtService.destroyToken();
        this.currentUser = null;
        this.router.navigate(['/login']);
    }

    loadUser() {
        this.currentUser = this.jwtService.getToken();

        if (this.currentUser) {
            this.currentUser.Roles = JSON.parse(this.currentUser.Roles as unknown as string);
        }
    }

    isAuthenticated() {
        return this.currentUser != null;
    }

    isAdmin() {
        return this.currentUser.Roles.some(r => r == Roles.ADMIN);
    }

    hasAnyRole(expectedRoles: string[]) {
        return this.currentUser != null && _.intersection(expectedRoles, this.currentUser.Roles).length > 0;
    }
}
