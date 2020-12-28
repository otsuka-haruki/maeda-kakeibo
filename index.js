'use strict';

import { AppInitialize } from './assets/scripts/general_initialization/AppInitialize.js';
import { InputCard } from './assets/scripts/components/InputCard.js';
import { FetchData } from './assets/scripts/database/FetchData.js';
import * as drawChart from './assets/scripts/charts/original_chart.js';
import { MaterializeSelectFixed } from './assets/scripts/libraries/MaterializeSelectFixed.js';

class App {
  constructor() {
    new AppInitialize();
    new InputCard();
    new FetchData();
    drawChart.chartInitialize();
    drawChart.drawChartDayDoughnut();
    MaterializeSelectFixed();
  }
}

// firing app

new App();

// test below

const tabs = document.querySelectorAll('.tabs li');
tabs[1].addEventListener('click', () => {
  drawChart.drawChartWeekBar();
  drawChart.drawChartWeekDoughnut();
});
tabs[2].addEventListener('click', () => {
  drawChart.drawChartMonthDoughnutIn();
  drawChart.drawChartMonthDoughnutOut();
})
tabs[3].addEventListener('click', () => {
  drawChart.drawChartYearDoughnut();
});
