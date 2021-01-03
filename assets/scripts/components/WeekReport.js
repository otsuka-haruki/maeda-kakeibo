import * as chartFunction from '../charts/original_chart.js';

export class WeekReport {
  constructor() {
    this.drawChart();
  }
  // test

  drawChart() {
    document.getElementById('tab__week').addEventListener('click', () => {
      chartFunction.drawChartWeekBar();
      chartFunction.drawChartWeekDoughnut();
    });
  }
}
