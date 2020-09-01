import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import { PeopleService } from '../../services/people.service';
import { People } from "../../interface";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  people: People[];

  ngUnsubscribe: Subscription;

  constructor(
    private _peopleService: PeopleService,
    private _toast: ToastrService
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.ngUnsubscribe = this._peopleService.fetch().subscribe(person => {
      this.people = person;
    }, error => {
      this._toast.error(error.message);
    })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.unsubscribe();
  }

}
