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
