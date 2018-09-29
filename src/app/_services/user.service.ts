import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    private apiUrl: 'http://localhost:4200';
    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }
}