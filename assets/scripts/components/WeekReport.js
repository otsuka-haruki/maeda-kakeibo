import * as chartFunction from '../charts/original_chart.js';

export class WeekReport {
  constructor() {
    this.drawChart();
  }
  // test

  drawChart() {
    document.getElementById('tab__week').addEventListener('click', () => {
      const oldChartMonitors = document.querySelectorAll('#report__week .chartjs-size-monitor');
      const oldCharts = document.querySelectorAll('#report__week canvas');
      if (oldChartMonitors.length > 0) {
        oldChartMonitors.forEach(element => {
          element.remove();
        });
        oldCharts.forEach(element => {
          element.remove();
        })
      }

      (function() {
        const container = document.querySelector('#report__week__this-week .card-content');
        const template = document.getElementById('report__week__this-week__template-canvas-week-bar-out');
        const clone = template.content.cloneNode(true);
        container.append(clone);
        chartFunction.drawChartWeekBar();
      })();
      (function() {
        const container = document.querySelectorAll('#report__week__this-week .card-content')[1];
        const template = document.getElementById('report__week__this-week__template-canvas-week-doughnut-out');
        const clone = template.content.cloneNode(true);
        container.append(clone);
        chartFunction.drawChartWeekDoughnut();
      })();
    });
  }
}
