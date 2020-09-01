import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PeopleRoutingModule } from './people.routing';
import { PeopleComponent } from './people.component';
import { ProgressComponent } from './progress/progress.component';
import { ProjectsComponent } from './projects/projects.component';
import { HoursComponent } from './hours/hours.component';
import { TasksComponent } from './tasks/tasks.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
    imports: [
        SharedModule,
        PeopleRoutingModule
    ],
    declarations: [
        PeopleComponent,
        ProgressComponent,
        ProjectsComponent,
        HoursComponent,
        TasksComponent,
        StatisticsComponent
    ]
})
export class PeopleModule { }
