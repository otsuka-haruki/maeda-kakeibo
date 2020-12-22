'use strict';

import { InputCard } from './assets/scripts/input_card.js';
import { FetchData } from './assets/scripts/FetchData.js';

class App {
  constructor() {
    new InputCard();
    new FetchData();
  }
}

// firing app

new App();
