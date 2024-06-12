import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ CommonModule, HighchartsChartModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

//child class getting data from the parent class
export class TestComponent implements OnChanges {
  @Input() chartOptions!: Highcharts.Options;
  Highcharts: typeof Highcharts = Highcharts;
  updateFromInput = false;

  ngOnChanges() {
    // Trigger chart update when input changes
    this.updateFromInput = true;
  }
}