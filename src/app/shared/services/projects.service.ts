import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '@env/environment';
import { Observable } from "rxjs";
import { Project } from "../interface";

@Injectable({
    providedIn: "root"
})
export class ProjectsService {
    constructor(private http: HttpClient) { }

    fetch(): Observable<Project[]> {
        return this.http.get<Project[]>(`${environment.url}/projects`);
    }

}