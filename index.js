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
  YearReport
} from './assets/scripts/components/YearReport.js'
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
    new YearReport();
    fontActivate();
  }
}

// firing app

new App();

// test below

// const testobj = JSON.parse(localStorage.getItem('report_year'));
// testobj[2022] = {
//   in: {
//     each_month: {
//
//     },
//     category: {
//
//     },
//     howtopay: {
//
//     },
//   },
//   out: {
//     each_month: {
//
//     },
//     category: {
//
//     },
//     howtopay: {
//
//     },
//   },
// };
//
// localStorage.setItem('report_year', JSON.stringify(testobj));
