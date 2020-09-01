import { Component, Input, OnChanges } from "@angular/core";
import * as Highcharts from "highcharts";
import { Options } from "highcharts"
import HC_exporting from 'highcharts/modules/exporting';
import HC_export_data from 'highcharts/modules/export-data';

HC_exporting(Highcharts);
HC_export_data(Highcharts);

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnChanges {

  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  @Input() data: any = [];

  chartOptions: Options = {
    chart: {
      backgroundColor: '#303030',
      plotBackgroundColor: '#303030'
    },
    title: {
      text: ''
    },
    legend: {
      itemStyle: {
        color: '#ffffff'
      }
    },
    tooltip: {
      enabled: false,
      style: {
        textOutline: 'none',
        fontWeight: 'bold',
        fontSize: '10px',
        color: '#666'
      }
    },
    plotOptions: {
      pie: {
        animation: false,
        allowPointSelect: true,
        cursor: 'pointer',
        borderWidth: 0,
        shadow: false,
        size: '100%',
        dataLabels: {
          enabled: true,
          x: 2,
          y: -14,
          distance: -30,
          format: '<b>{point.name}<\/b><br><i style="font-size:1.5em">{point.percentage:.0f}</i>%',
          style: {
            textOutline: 'none',
            fontWeight: 'bold',
            fontSize: '10px',
            color: '#fff',
            textShadow: '0 0 2px #ddd',
            textAlign: 'center'
          }
        }
      }
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: true,
    },
    series: [{
      type: 'pie',
      data: this.data
    }]
  };

  ngOnChanges() {
    this.chartOptions.series = [{
      type: 'pie',
      data: this.data
    }]
    this.updateFlag = true;
  }

}
