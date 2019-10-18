
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { stringify } from '@angular/compiler/src/util';

@Injectable({ providedIn: 'root' })
export class AuthentificationService {
    public currentUserSubject: BehaviorSubject<number>;
    public currentUser: Observable<number>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<number>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.get<number>(environment.apiRoot + 'UsrLists/' + email + password);
    }

    logout() {
        // remove user from session storage and set current user to null
        sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
