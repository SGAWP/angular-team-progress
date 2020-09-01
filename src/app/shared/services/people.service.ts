import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '@env/environment';
import { Observable } from "rxjs";
import { People } from "../interface";

@Injectable({
    providedIn: "root"
})
export class PeopleService {
    constructor(private http: HttpClient) { }

    fetch(): Observable<People[]> {
        return this.http.get<People[]>(`${environment.url}/people`);
    }

    getPeopleById(person_id: number): Observable<People> {
        return this.http.get<People>(`${environment.url}/people?person_id=${person_id}`);
    }

}