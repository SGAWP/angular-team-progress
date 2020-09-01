import { Component, Input, OnDestroy, OnChanges } from "@angular/core";
import { Subscription } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import { HoursService } from "../../../shared/services/hours.service";
import { Hour } from "../../../shared/interface";

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})

export class HoursComponent implements OnChanges, OnDestroy {

  hours: Hour[];
  pieChart = []
  pieCategoryChart = [];

  @Input('people_id') people_id: number;

  ngUnsubscribe: Subscription;

  constructor(
    private _hoursService: HoursService,
    private _toast: ToastrService
  ) { }

  ngOnChanges() {
    this.load();
  }

  load() {
    this.ngUnsubscribe = this._hoursService.fetch(this.people_id).subscribe((hours) => {
      this.hours = hours;
      this.pieChart = this.hours.map(hour => ({
        name: hour.activity,
        y: hour.hours,
        color: hour.color
      }));
    }, error => {
      this._toast.error(error.message);
    })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.unsubscribe();
  }

}
