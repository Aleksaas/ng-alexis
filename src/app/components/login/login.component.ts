import { LoginCommand } from '@app/model/api.model';
import { AuthService } from '@app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginCommand: LoginCommand = new LoginCommand();

    constructor(private authService: AuthService,
                private router: Router) {

    }

    ngOnInit() {
    }

    async login() {
        const response = await this.authService.login(this.loginCommand);
        this.router.navigate(['/home']);
    }
}
