import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import { StatisticsService } from "../../../shared/services/statistics.service";
import { Statistics } from "../../../shared/interface";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnDestroy {

  statistics: Statistics[];
  lineChart = [];
  lineCategoryChart = [];

  ngUnsubscribe: Subscription;

  constructor(
    private _statisticsService: StatisticsService,
    private _toast: ToastrService
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.ngUnsubscribe = this._statisticsService.fetch().subscribe((statistics) => {
      this.statistics = statistics;
      this.lineChart = [{
        data: statistics.map(item => item.task1),
        color: "#ff4081"
      }, {
        data: statistics.map(item => item.task2),
        color: "#ffffff"
      }];
      this.lineCategoryChart = statistics.map(item => item.month);
    }, error => {
      this._toast.error(error.message);
    })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.unsubscribe();
  }

}
