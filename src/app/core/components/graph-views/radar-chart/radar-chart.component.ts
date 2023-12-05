import { Component } from '@angular/core';
import { Chart, RadarController } from 'chart.js/auto';

@Component({
  selector: 'radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent {
  public radarChart: any;

  ngOnInit() {
    this.createRadarChart()
  }

  createRadarChart() {
    this.radarChart = new Chart("radarChart", {
      type: 'radar', // This denotes the type of chart

      data: {
        labels: ['Brothers / Aspirants', 'Researchers', 'Professionals', 'Teachers/Professors', 'Support Staff', 'School Leaders', 'Kindergarten', 'Grade School', 'High School', 'College', 'Post-Grad', 'Alumni', 'Parents', 'Volunteers'],
        datasets: [
          {
            label: 'Latin America',
            data: [400, 240, 420, 432, 253, 696, 565, 395, 666, 444, 333, 500, 201, 555],
            backgroundColor: ['rgba(255, 255, 128, 0.5)'
            ],
            borderColor: ['#ffff00'
            ], 
            pointBackgroundColor: 'rgba(54, 162, 235, 1)'
          },
          {
            label: 'North America',
            data: [333, 495, 15, 892, 194, 587, 372, 921, 582, 993, 566, 878, 427, 730],
            backgroundColor: ['rgba(224, 26, 39, 0.5)'
            ],
            borderColor: ['#f82639'
            ], 
            pointBackgroundColor: 'rgba(224, 26, 39, 1)'
          }
        ]
      },
      options: {
        aspectRatio: 3,
        scales: {
          r: {
            angleLines: {
              color: 'rgba(0, 0, 0, 0.1)', 
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)', 
            },
            pointLabels: {
              font: {
                size: 12,
                weight: 'bold'
              },
              color: 'rgba(0, 0, 0, 0.8)', 
            }
          }
        },
      }
    });
  }
}
