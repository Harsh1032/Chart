import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import more from 'highcharts/highcharts-more';
import { TestComponent } from './test/test.component';

more(Highcharts);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighchartsChartModule, TestComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Main class sending data to child test class
export class AppComponent {
  title = 'Chart';

  Highcharts: typeof Highcharts = Highcharts;
 
  chartOptions: Highcharts.Options = {
    colors: ['#FFD700', '#C0C0C0', '#CD7F32', '#5fc9f3'],
    chart: {
      type: 'column',
      inverted: true,
      polar: true
    },
    tooltip: {
      outside: true
    },
    pane: {
      size: '85%',
      innerSize: '18%',
      startAngle: 0,
      endAngle: 360
      
    },
    xAxis: {

      tickLength: 0,

      labels: {
          align: 'right',
          useHTML: true,
          allowOverlap: true,
          step: 1,
          y: 3,
          style: {
              fontSize: '13px'
          }
      },
      lineWidth: 0,
      gridLineWidth: 0,
      categories: [
          'Lionel Messi',
          'Critiano Ronaldo',
          'Neymar',
          'Mbappe'
      ]
    },
    yAxis: {
      lineWidth: 0,
      tickInterval: 200,
      reversedStacks: false,
      endOnTick: true,
      showLastLabel: true,
      gridLineWidth: 0
    },
    plotOptions: {
      column: {
          stacking: 'normal',
          borderWidth: 0,
          pointPadding: 0,
          groupPadding: 0.15,
          borderRadius: '50%'
      }
    },
    series: [
      {
        name: 'Goals',
        type: 'column', 
        data: [835, 893, 476, 329]
      },
      {
        name: 'Assits',
        type: 'column',
        data: [372, 251, 286, 154]
      },
      {
        name: 'Matches Played',
        type: 'column', 
        data: [1062, 1225, 763, 442]
      },
      {
        name: 'Goals in Europe',
        type: 'column',
        data: [704, 701, 223,  198]
      }
    ]
  };
}
