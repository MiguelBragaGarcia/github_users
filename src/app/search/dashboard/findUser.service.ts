import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IFindUser } from './IFindUser';

const API = "https://api.github.com/users"

@Injectable({providedIn:"root"})
export class FindUserService {
    constructor(private http: HttpClient){}

    findUser(user:string) {
        return this.http.get<IFindUser>(API + `/${user}`);
    }
}