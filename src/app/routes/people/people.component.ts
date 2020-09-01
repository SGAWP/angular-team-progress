import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import { PeopleService } from "../../shared/services/people.service";
import { People } from "../../shared/interface";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: People;

  constructor(
    private _peopleService: PeopleService,
    private route: ActivatedRoute,
    private _toast: ToastrService
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              return this._peopleService.getPeopleById(params['id']);
            }
            return of(null);
          }
        )
      )
      .subscribe(
        (people: People) => {
          this.people = people[0];
        },
        error => {
          this._toast.error(error.message);
        }
      )
  }

}
