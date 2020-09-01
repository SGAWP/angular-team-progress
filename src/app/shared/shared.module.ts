import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { ToastrModule } from "ngx-toastr";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SplineComponent } from './widgets/spline/spline.component';
import { PieComponent } from './widgets/pie/pie.component';
import { BarComponent } from './widgets/bar/bar.component';
import { LineComponent } from './widgets/line/line.component';

@NgModule({
    declarations: [
        SidebarComponent,
        ToolbarComponent,
        FooterComponent,
        SplineComponent,
        PieComponent,
        BarComponent,
        LineComponent
    ],
    imports: [
        MaterialModule,
        FlexLayoutModule,
        RouterModule,
        CommonModule,
        ToastrModule.forRoot(),
        FormsModule,
        HighchartsChartModule,
        ReactiveFormsModule
    ],
    exports: [
        MaterialModule,
        FlexLayoutModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HighchartsChartModule,
        SidebarComponent,
        ToolbarComponent,
        FooterComponent,
        SplineComponent,
        PieComponent,
        BarComponent,
        LineComponent
    ]
})
export class SharedModule { }