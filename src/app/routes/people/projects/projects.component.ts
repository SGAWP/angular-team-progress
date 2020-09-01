import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import { ProjectsService } from "../../../shared/services/projects.service";
import { Project } from "../../../shared/interface";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects: Project[];
  barChart = [];
  barCategoryChart = [];

  ngUnsubscribe: Subscription;

  constructor(
    private _projectsService: ProjectsService,
    private _toast: ToastrService
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.ngUnsubscribe = this._projectsService.fetch().subscribe((projects) => {
      this.projects = projects;
      this.barChart = [{
        data: projects.map(item => item.task1),
        color: "rgba(255, 64, 129, 0.34)"
      }, {
        data: projects.map(item => item.task2),
        color: "rgba(28, 161, 193, 0.34)"
      }];
      this.barCategoryChart = projects.map(item => item.project);
    }, error => {
      this._toast.error(error.message);
    })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.unsubscribe();
  }

}
