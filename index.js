'use strict';

import { InputCard } from './assets/scripts/InputCard.js';
import { FetchData } from './assets/scripts/database/FetchData.js';
import { CreateChart } from './assets/scripts/charts/original_chart.js';

class App {
  constructor() {
    new InputCard();
    new FetchData();
    new CreateChart();
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
