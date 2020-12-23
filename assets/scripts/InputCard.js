'use strict';

import {
  FetchData
} from './database/FetchData.js';

export class InputCard {
  constructor() {
    this.setTodayAsDefaultAtDatepicker();
    this.addEventToAddBtn();
  }

  setTodayAsDefaultAtDatepicker() {
    const date = new Date();
    const todayDate = date.getDate();
    const thisMonth = +date.getMonth() + 1;
    const thisYear = date.getFullYear();

    const datepickerInput = document.getElementById('input-card__date');
    datepickerInput.value = `${thisYear}/${thisMonth}/${todayDate}`;

    const datepickerLabel = document.getElementById('input-card__datepicker-label');
    datepickerLabel.classList.add('active');
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
      const thingsValue = document.getElementById('input-card__things').value.trim();
      const categoryValue = categorySelectInstance.getSelectedValues()[0];
      const howToPayValue = howToPaySelectInstance.getSelectedValues()[0];

      const isInputContentValid = this.validateInputContent(howMuchValue, thingsValue, categoryValue, howToPayValue);
      if (!isInputContentValid) {
        return;
      }

      const inputValueArray = [isSwitchChecked, dateValue, howMuchValue, thingsValue, categoryValue, howToPayValue];
      localStorage.setItem('array1', inputValueArray);
      M.toast({
        html: 'データを追加しました！',
        displayLength: 3000,
        classes: 'toast-success'
      });
      new FetchData();
      this.clearInputValue();
    });
  }

  validateInputContent(howMuchValue, thingsValue, categoryValue, howToPayValue) {
    if (!howMuchValue) {
      M.toast({
        html: '金額が入力されていません',
        displayLength: 3000,
        classes: 'toast-problem'
      });
      return;
    } else if (howMuchValue == 0) {
      M.toast({
        html: '金額が０円になっています',
        displayLength: 3000,
        classes: 'toast-problem'
      });
      return;
    } else if (thingsValue.length > 15) {
      M.toast({
        html: '用途は１５字以内で書いてください',
        displayLength: 3000,
        classes: 'toast-problem'
      });
      return;
    } else if (!thingsValue) {
      M.toast({
        html: '用途が入力されていません',
        displayLength: 3000,
        classes: 'toast-problem'
      });
      return;
    } else if (!categoryValue) {
      M.toast({
        html: 'カテゴリーが選択されていません',
        displayLength: 3000,
        classes: 'toast-problem'
      });
      return;
    } else if (!howToPayValue) {
      M.toast({
        html: '支払い方法が選択されていません',
        displayLength: 3000,
        classes: 'toast-problem'
      });
      return;
    } else {
      return true;
    }
  }

  clearInputValue() {
    $('#input-card__how-much').val('');
    $('#input-card__how-much').next().removeClass('active');
    $('#input-card__things').val('');
    $('#input-card__things').next().removeClass('active');
    $('#input-card__category-select').prop('selectedIndex', 0);
    $('#input-card__category-select').formSelect();
    $('#input-card__how-to-pay-select').prop('selectedIndex', 0);
    $('#input-card__how-to-pay-select').formSelect();
  }
}
