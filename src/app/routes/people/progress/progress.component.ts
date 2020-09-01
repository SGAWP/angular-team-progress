import { Component, Input, OnDestroy, OnChanges } from "@angular/core";
import { Subscription } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import { ProgressService } from "../../../shared/services/progress.service";
import { Progress } from "../../../shared/interface";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnChanges, OnDestroy {

  progress: Progress[];
  splineChart = [];
  splineCategoryChart = [];

  @Input('people_id') people_id: number;

  ngUnsubscribe: Subscription;

  constructor(
    private _progressService: ProgressService,
    private _toast: ToastrService
  ) { }

  ngOnChanges() {
    this.load();
  }

  load() {
    this.ngUnsubscribe = this._progressService.fetch(this.people_id).subscribe((progress) => {
      this.progress = progress;
      this.splineChart = progress.map(item => item.tasks);
      this.splineCategoryChart = progress.map(item => item.week);
    }, error => {
      this._toast.error(error.message);
    })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.unsubscribe();
  }

}
