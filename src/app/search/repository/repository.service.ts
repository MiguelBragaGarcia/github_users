import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRepository } from './IRepository';

const API  = "https://api.github.com";

@Injectable({providedIn: 'root'})
export class RepositoryService {
    constructor(private http: HttpClient) {}

    findRepositories(userName:string) {
        return this.http.get<IRepository[]>(API + `/users/${userName}/repos`)
    }
    
}