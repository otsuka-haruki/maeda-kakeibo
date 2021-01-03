'use strict';

import {
  AppInitialize
} from './assets/scripts/general_initialization/AppInitialize.js';
import {
  InputCard
} from './assets/scripts/components/InputCard.js';
import {
  FetchData
} from './assets/scripts/database/FetchData.js';
import * as drawChart from './assets/scripts/charts/original_chart.js';
import {
  DayReport
} from './assets/scripts/components/DayReport.js';
// import {
//   fontActivate
// } from './assets/scripts/functions/fontActivate.js';

class App {
  constructor() {
    new AppInitialize();
    new FetchData();
    new InputCard();
    new DayReport();
    drawChart.drawChartDayDoughnut();
    // fontActivate();
  }
}

// firing app

new App();

// test below
const dropdownToday = document.getElementById('report__day__dropdown-today');
const dropdownYesterday = document.getElementById('report__day__dropdown-yesterday');
dropdownToday.addEventListener('click', () => {
  document.getElementById('report__day__today').classList.remove('display-none');
  document.getElementById('report__day__yesterday').classList.add('display-none');
});
dropdownYesterday.addEventListener('click', () => {
  document.getElementById('report__day__today').classList.add('display-none');
  document.getElementById('report__day__yesterday').classList.remove('display-none');
});

alert('setting??');
