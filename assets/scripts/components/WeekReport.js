import * as chartFunction from '../charts/original_chart.js';

export class WeekReport {
  constructor() {
    this.deleteAndDrawChart();
    this.setWeekContent();
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

      this.drawBarChart('this-week', 'out', chartFunction.drawChartThisWeekBarOut, 1);
      this.drawDoughnutChart('this-week', 'out', 'category', chartFunction.drawChartThisWeekDoughnutOutCategory, 2);
      this.drawDoughnutChart('this-week', 'out', 'howtopay', chartFunction.drawChartThisWeekDoughnutOutHowtopay, 3);
      this.drawBarChart('this-week', 'in', chartFunction.drawChartThisWeekBarIn, 4);
      this.drawDoughnutChart('this-week', 'in', 'category', chartFunction.drawChartThisWeekDoughnutInCategory, 5);
      this.drawDoughnutChart('this-week', 'in', 'howtopay', chartFunction.drawChartThisWeekDoughnutInHowtopay, 6);

      this.drawBarChart('last-week', 'out', chartFunction.drawChartLastWeekBarOut, 1);
      this.drawDoughnutChart('last-week', 'out', 'category', chartFunction.drawChartLastWeekDoughnutOutCategory, 2);
      this.drawDoughnutChart('last-week', 'out', 'howtopay', chartFunction.drawChartLastWeekDoughnutOutHowtopay, 3);
      this.drawBarChart('last-week', 'in', chartFunction.drawChartLastWeekBarIn, 4);
      this.drawDoughnutChart('last-week', 'in', 'category', chartFunction.drawChartLastWeekDoughnutInCategory, 5);
      this.drawDoughnutChart('last-week', 'in', 'howtopay', chartFunction.drawChartLastWeekDoughnutInHowtopay, 6);
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

  setWeekContent() {
    const weekObject = JSON.parse(localStorage.getItem('report_week'));
    const valuesOutThisWeek = Object.values(weekObject.thisWeek.out.category);
    let sum = 0;
    valuesOutThisWeek.forEach(element => {
      sum = sum + +element;
    });
    document.getElementById('report__week__this-week__card-general__span-out').textContent = sum;
    const valueInThisWeek = Object.values(weekObject.thisWeek.in.category);
    sum = 0;
    valueInThisWeek.forEach(element => {
      sum = sum + +element;
    });
    document.getElementById('report__week__this-week__card-general__span-in').textContent = sum;
    const valueOutLastWeek = Object.values(weekObject.lastWeek.out.category);
    sum = 0;
    valueOutLastWeek.forEach(element => {
      sum = sum + +element;
    });
    document.getElementById('report__week__last-week__card-general__span-out').textContent = sum;
    const valueInLastWeek = Object.values(weekObject.lastWeek.in.category);
    sum = 0;
    valueInLastWeek.forEach(element => {
      sum = sum + +element;
    });
    document.getElementById('report__week__last-week__card-general__span-in').textContent = sum;

  }
}
