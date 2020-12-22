'use strict';

import { FetchData } from './FetchData.js';

export class InputCard {
  constructor() {
    this.addEventToAddBtn();
  }

  addEventToAddBtn() {
    const addBtn = document.getElementById('input-card__add-btn');
    addBtn.addEventListener('click', () => {
      let isSwitchChecked = false;
      const switchBtnInput = document.querySelector('.switch input');
      if (switchBtnInput.checked) {
        isSwitchChecked = true;
      }

      const howToPaySelect = document.getElementById('input-card__how-to-pay-select');
      const howToPaySelectInstance = M.FormSelect.getInstance(howToPaySelect);
      const categorySelect = document.getElementById('input-card__category-select');
      const categorySelectInstance = M.FormSelect.getInstance(categorySelect);

      const dateValue = document.getElementById('input-card__date').value;
      const howMuchValue = document.getElementById('input-card__how-much').value;
      const thingsValue = document.getElementById('input-card__things').value;
      const categoryValue = categorySelectInstance.getSelectedValues()[0];
      const howToPayValue = howToPaySelectInstance.getSelectedValues()[0];

      const inputValueArray = [isSwitchChecked, dateValue, howMuchValue, thingsValue, categoryValue, howToPayValue];
      console.log(inputValueArray);
      localStorage.setItem('array1', inputValueArray);
      new FetchData();
    });
  };
}
