import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  public pieChart: any

  ngOnInit(): void {
    this.createChart()
  }

  createChart() {
    this.pieChart = new Chart("pieChart", {
      type: 'pie', // This denotes the type of chart

      data: {// values on X-Axis
        labels: ['Poor', 'Urban Poor','Women','Children','Indigenous People','LGBTQIA+', 'PWD', 'Mentally Ill', 'Senior Citizen', 'Broken Family', 'Orphans', 'Out-of-School Youth', 'Rehabilitees', 'Refugees', 'Others'],

        // To be used on the chart
        datasets: [{
        label: 'Number of Project',    // Slice Description when hovered
        data: [300, 240, 100, 432, 253, 34, 123, 565, 245, 463, 256, 653, 125, 564, 523],    // number to be divided into slices
        backgroundColor: [
          '#ff0000',
          '#ffcccc',
          '#00ff00',
          '#ffff00',
          '#ffff80',
          '#0000ff',
          '#cf27f1', 
          '#89dd28', 
          '#0f003d', 
          '#ac4fd2',
          '#259011',
          '#896fab',
          '#f0c8c7',
          '#5bbbcd',
          '#ffbbcd'
        ],                          // Colors to correspons with the data
        hoverOffset: 30        // Distance of the slice from chart center when hovered
        }],
      },
      options: {
        aspectRatio:3
      }
    });
  }
}
