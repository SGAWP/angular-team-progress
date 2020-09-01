import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from 'highcharts/modules/exporting';
import HC_export_data from 'highcharts/modules/export-data';

HC_exporting(Highcharts);
HC_export_data(Highcharts);

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;
  @Input() data: any = [];
  @Input() categories: any = [];

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'bar',
        backgroundColor: '#303030',
        plotBackgroundColor: '#303030',
        plotShadow: false
      },
      legend: {
        enabled: false
      },
      yAxis: [
        {
          gridLineColor: '#424242',
          title: {
            text: null
          },
          labels: {
            enabled: false
          }
        }
      ],
      title: {
        text: ''
      },
      tooltip: {
        formatter: function () {
          return this.x + ': ' + '<b>' + this.y + '</b>' + ' tasks completed.';
        },
        backgroundColor: '#424242',
        borderWidth: 0,
        style: {
          color: '#ffffff'
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      xAxis: [{
        categories: this.categories
      }],
      series: this.data
    };
  }

}
