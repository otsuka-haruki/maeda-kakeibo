'use strict';

import { OriginalMaterializeInitialize } from './assets/scripts/OriginalMaterializeInitialize.js';
import { InputCard } from './assets/scripts/InputCard.js';
import { FetchData } from './assets/scripts/database/FetchData.js';
import * as drawChart from './assets/scripts/charts/original_chart.js';
import { MaterializeSelectFixed } from './assets/scripts/libraries/MaterializeSelectFixed.js';

class App {
  constructor() {
    OriginalMaterializeInitialize();
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
const options = document.querySelectorAll('#input-card__category select option');
const valueArray = ['', '食費', '衣服', '日用品', '交際費', '光熱費', '交通費'];
for (let i = 0; i < options.length; i++) {
  const value = valueArray[i];
  options[i].setAttribute('value', value);
}

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
