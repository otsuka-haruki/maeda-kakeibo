'use strict';

import {
  AppInitialize
} from './assets/scripts/general_initialization/AppInitialize.js';
import {
  FetchData
} from './assets/scripts/database/FetchData.js';
import {
  InputCard
} from './assets/scripts/components/InputCard.js';
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
    fontActivate();
    new InputCard();
    new DayReport();
    new WeekReport();
    new MonthReport();
    new YearReport();
  }
}

// firing app

new App();

// TODO: things to do below

// TODO: 今日と昨日のレコードを修正・削除できるようにする

// test below
