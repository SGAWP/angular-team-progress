import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '@env/environment';
import { Observable } from "rxjs";
import { Task } from "../interface";

@Injectable({
    providedIn: "root"
})
export class TasksService {
    constructor(private http: HttpClient) { }

    getPeopleById(people_id: number, sort: string, order: string): Observable<Task[]> {
        return this.http.get<Task[]>(`${environment.url}/tasks?people_id=${people_id}&_sort=${sort}&_order=${order}`);
    }

}