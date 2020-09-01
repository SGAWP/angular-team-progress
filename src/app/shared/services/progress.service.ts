import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '@env/environment';
import { Observable } from "rxjs";
import { Progress } from "../interface";

@Injectable({
    providedIn: "root"
})
export class ProgressService {
    constructor(private http: HttpClient) { }

    fetch(people_id: number): Observable<Progress[]> {
        return this.http.get<Progress[]>(`${environment.url}/progress?people_id=${people_id}`);
    }

}