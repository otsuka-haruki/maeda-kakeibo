'use strict';

export class InputCard {
  constructor() {
    this.addEventToSwitchBtn();
    this.addEventToDatepicker();
  }

  addEventToSwitchBtn() {
    const switchBtn = document.querySelector('.switch');
    const switchBtnInput = document.querySelector('.switch input');
    switchBtn.addEventListener('click', () => {
      if (switchBtnInput.checked) {
        alert('checked');
      }
    });
  }

  addEventToDatepicker() {
    
  }
}
