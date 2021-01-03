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
// import * as drawChart from './assets/scripts/charts/original_chart.js';
import {
  DayReport
} from './assets/scripts/components/DayReport.js';
import {
  WeekReport
} from './assets/scripts/components/WeekReport.js'
import {
  MonthReport
} from './assets/scripts/components/MonthReport.js'
import {
  fontActivate
} from './assets/scripts/functions/fontActivate.js';

class App {
  constructor() {
    new AppInitialize();
    new FetchData();
    new InputCard();
    new DayReport();
    new WeekReport();
    new MonthReport();
    // drawChart.drawTodayChart();
    fontActivate();
  }
}

// firing app

new App();

// test below
