import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [FormsModule],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class Login {

    username = '';
    password = '';
    error = '';

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    login() {
    this.http.post('/api/login', {
        username: this.username,
        password: this.password
    }).subscribe({
        next: (response) => {
            this.router.navigate(['/admin']);
        },

        error: (error) => {
            this.error = 'Incorrect username or password.';
        }
    });
}
}