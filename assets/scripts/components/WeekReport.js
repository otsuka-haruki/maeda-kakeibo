import * as chartFunction from '../charts/original_chart.js';

export class WeekReport {
  constructor() {
    this.deleteAndDrawChart();
  }
  // test

  deleteAndDrawChart() {
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

      this.drawBarChart('this-week', 'out', chartFunction.drawChartThisWeekBarOut, 0);
      this.drawDoughnutChart('this-week', 'out', 'category', chartFunction.drawChartThisWeekDoughnutOutCategory, 1);
      this.drawDoughnutChart('this-week', 'out', 'howtopay', chartFunction.drawChartThisWeekDoughnutOutHowtopay, 2);
      this.drawBarChart('this-week', 'in', chartFunction.drawChartThisWeekBarIn, 3);
      this.drawDoughnutChart('this-week', 'in', 'category', chartFunction.drawChartThisWeekDoughnutInCategory, 4);
      this.drawDoughnutChart('this-week', 'in', 'howtopay', chartFunction.drawChartThisWeekDoughnutInHowtopay, 5);

      this.drawBarChart('last-week', 'out', chartFunction.drawChartLastWeekBarOut, 0);
      this.drawDoughnutChart('last-week', 'out', 'category', chartFunction.drawChartLastWeekDoughnutOutCategory, 1);
      this.drawDoughnutChart('last-week', 'out', 'howtopay', chartFunction.drawChartLastWeekDoughnutOutHowtopay, 2);
      this.drawBarChart('last-week', 'in', chartFunction.drawChartLastWeekBarIn, 3);
      this.drawDoughnutChart('last-week', 'in', 'category', chartFunction.drawChartLastWeekDoughnutInCategory, 4);
      this.drawDoughnutChart('last-week', 'in', 'howtopay', chartFunction.drawChartLastWeekDoughnutInHowtopay, 5);
    });
  }

  drawBarChart(whichWeek, inOrOut, functionName, cardNumber) {
    const container = document.querySelectorAll(`#report__week__${whichWeek} .card-content`)[cardNumber];
    const template = document.getElementById(`report__week__${whichWeek}__template-canvas-week-bar-${inOrOut}`);
    const clone = template.content.cloneNode(true);
    container.append(clone);
    functionName();
  }

  drawDoughnutChart(whichWeek, inOrOut, genre, functionName, cardNumber) {
    const container = document.querySelectorAll(`#report__week__${whichWeek} .card-content`)[cardNumber];
    const template = document.getElementById(`report__week__${whichWeek}__template-canvas-week-doughnut-${inOrOut}-${genre}`);
    const clone = template.content.cloneNode(true);
    container.append(clone);
    functionName();
  }
}
