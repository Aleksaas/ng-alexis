import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";


@Injectable()
export class JwtService {

    getToken(): any {
        let tokenDecoded = null;

        const token = window.localStorage['jwtToken'];

        if (token) {
            tokenDecoded = jwt_decode(token);
        }

        return tokenDecoded;
    }

    saveToken(token: string) {
        window.localStorage['jwtToken'] = token;
    }

    destroyToken() {
        window.localStorage.removeItem('jwtToken');
    }
}
