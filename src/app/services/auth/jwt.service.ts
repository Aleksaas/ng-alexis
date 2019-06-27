import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { UserToken } from '@app/model/common.model';


@Injectable()
export class JwtService {

    getToken(): UserToken {
        let tokenDecoded = null;

        const token = window.localStorage['jwtToken'];

        if (token) {
            tokenDecoded = jwt_decode(token);
        }

        return tokenDecoded;
    }

    getRawToken(): string {
        return window.localStorage['jwtToken'];
    }

    saveToken(token: string) {
        window.localStorage['jwtToken'] = token;
    }

    destroyToken() {
        window.localStorage.removeItem('jwtToken');
    }
}
