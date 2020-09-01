import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '@env/environment';
import { Observable } from "rxjs";
import { Hour } from "../interface";

@Injectable({
    providedIn: "root"
})
export class HoursService {
    constructor(private http: HttpClient) { }

    fetch(people_id: number): Observable<Hour[]> {
        return this.http.get<Hour[]>(`${environment.url}/hours?people_id=${people_id}`);
    }

}