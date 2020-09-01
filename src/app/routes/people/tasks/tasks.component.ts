import { Component, OnInit, ViewChild, Input, ChangeDetectorRef, OnDestroy, AfterViewInit, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { TasksService } from "../../../shared/services/tasks.service";

const COLS = [
  { value: "task", displayName: 'Task' },
  { value: "project", displayName: 'Project' },
  { value: "start_date", displayName: 'Start Date' },
  { value: "end_date", displayName: 'End Date' }
];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  allCols = COLS;
  displayedColumns: any[];

  public dataSource;

  @ViewChild(MatSort) sort: MatSort;

  @Input('people_id') people_id: number;

  ngUnsubscribe: Subscription;

  constructor(
    private _tasksService: TasksService,
    private cdr: ChangeDetectorRef,
    private _toast: ToastrService
  ) { }

  ngOnInit() {
    this.displayedColumns = this.allCols.map(col => col.value);
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnChanges() {
    this.load();
  }

  load() {
    this.ngUnsubscribe = this._tasksService.getPeopleById(this.people_id, this.sort?.active, this.sort?.direction).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    }, error => {
      this._toast.error(error.message);
    })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.unsubscribe();
  }

}
