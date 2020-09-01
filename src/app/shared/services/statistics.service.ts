import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '@env/environment';
import { Observable } from "rxjs";
import { Statistics } from "../interface";

@Injectable({
    providedIn: "root"
})
export class StatisticsService {
    constructor(private http: HttpClient) { }

    fetch(): Observable<Statistics[]> {
        return this.http.get<Statistics[]>(`${environment.url}/statistics`);
    }

}