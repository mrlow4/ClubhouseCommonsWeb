import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin',
    imports: [],
    templateUrl: './admin.html',
    styleUrl: './admin.css'
})
export class Admin {

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    logout() {
        this.http.post('/api/login/logout', {}).subscribe({
            next: () => {
                this.router.navigate(['/login']);
            },

            error: (error) => {
                console.error('Logout failed:', error);
            }
        });
    }
}