import { Component, Input, OnChanges } from "@angular/core";
import * as Highcharts from "highcharts";
import { Options } from "highcharts"
import HC_exporting from 'highcharts/modules/exporting';
import HC_export_data from 'highcharts/modules/export-data';

HC_exporting(Highcharts);
HC_export_data(Highcharts);

@Component({
  selector: 'app-spline',
  templateUrl: './spline.component.html',
  styleUrls: ['./spline.component.scss']
})
export class SplineComponent implements OnChanges {

  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  @Input() data: any = [];
  @Input() categories: any = [];

  chartOptions: Options = {
    chart: {
      backgroundColor: '#303030',
      plotBackgroundColor: '#303030',
      plotShadow: false
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
    legend: {
      enabled: false
    },
    title: {
      text: ''
    },
    tooltip: {
      formatter: function () {
        return 'Week ' + '<b>' + this.x + '</b>' + '<br>' + '<b>' + this.y + '</b>' + ' tasks completed.';
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
    plotOptions: {
      areaspline: {
        fillOpacity: 0.2,
        color: '#ff4081'
      },
      series: {
        marker: {
          enabled: false
        }
      }
    },
    xAxis: [{
      categories: this.categories
    }],
    series: [{
      type: 'areaspline',
      data: this.data
    }]
  }

  ngOnChanges() {
    this.chartOptions.xAxis = [{
      categories: this.categories
    }]
    this.chartOptions.series = [{
      type: 'areaspline',
      data: this.data
    }]
    this.updateFlag = true;
  }

}
