import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";


@Injectable()
export class JwtService {

    getToken(): any {
        const tokenDecoded = jwt_decode(window.localStorage['jwtToken']);
        return tokenDecoded;
    }

    saveToken(token: string) {
        window.localStorage['jwtToken'] = token;
    }

    destroyToken() {
        window.localStorage.removeItem('jwtToken');
    }
}
