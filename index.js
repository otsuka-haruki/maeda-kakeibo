'use strict';

import { InputCard } from './assets/scripts/input_card.js';
import { FetchData } from './assets/scripts/FetchData.js';
import { CreateChart } from './assets/scripts/original_chart.js';

class App {
  constructor() {
    new InputCard();
    new FetchData();
    new CreateChart();
  }
}

// firing app

new App();
