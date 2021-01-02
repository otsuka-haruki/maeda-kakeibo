'use strict';

import {
  setToastDataFunctions
} from '../functions/setToastDataFunctions.js';

export class InputCard {
  constructor() {
    this.initializeInputCardContent();
    this.initializeSettingModal();
  }

  initializeInputCardContent() {
    this.setTodayAsDefaultAtDatepicker();
    this.initializeCategorySelectOptions();
    this.initializeHowtopaySelectOptions();
    this.addEventListenerToCardAddBtn();
  }

  // initializing input card content below

  setTodayAsDefaultAtDatepicker() {
    const date = new Date();
    const todayDate = date.getDate();
    const thisMonth = +date.getMonth() + 1;
    const thisYear = date.getFullYear();

    const datepickerInput = document.getElementById('input-card__input--date');
    datepickerInput.value = `${thisYear}/${thisMonth}/${todayDate}`;

    const datepickerLabel = document.getElementById('input-card__input--date__label');
    datepickerLabel.classList.add('active');
  }

  initializeCategorySelectOptions() {
    const hasCategory = localStorage.getItem('user_category_options');
    if (!hasCategory) {
      const testCategoryArray = ['食費', '日用品', '交通費', '光熱費'];
      localStorage.setItem('user_category_options', testCategoryArray);
    }

    const userCategoryOptions = localStorage.getItem('user_category_options');
    const userCategoryOptionsArray = userCategoryOptions.split(',');

    const selectContainer = document.querySelector('#input-card__category-select');
    for (let i = 0; i < userCategoryOptionsArray.length; i++) {
      const template = document.getElementById('input-card__template-category-option');
      const clone = template.content.cloneNode(true);
      clone.querySelector('option').textContent = userCategoryOptionsArray[i];
      clone.querySelector('option').setAttribute('value', userCategoryOptionsArray[i]);
      selectContainer.append(clone);
    }
  }

  initializeHowtopaySelectOptions() {
    const hasHowtopay = localStorage.getItem('user_howtopay_options');
    if (!hasHowtopay) {
      const testHowtopayArray = ['現金', 'クレジットカード', 'Paypay', 'Linepay'];
      localStorage.setItem('user_howtopay_options', testHowtopayArray);
    }

    const userHowtopayOptions = localStorage.getItem('user_howtopay_options');
    const userHowtopayOptionsArray = userHowtopayOptions.split(',');

    const selectContainer = document.querySelector('#input-card__how-to-pay-select');
    for (let i = 0; i < userHowtopayOptionsArray.length; i++) {
      const template = document.getElementById('input-card__template-howtopay-option');
      const clone = template.content.cloneNode(true);
      clone.querySelector('option').textContent = userHowtopayOptionsArray[i];
      clone.querySelector('option').setAttribute('value', userHowtopayOptionsArray[i]);
      selectContainer.append(clone);
    }
  }

  addEventListenerToCardAddBtn() {
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

      const dateValue = document.getElementById('input-card__input--date').value;
      const howMuchValue = document.getElementById('input-card__input--how-much').value;
      const thingsValue = document.getElementById('input-card__things').value.trim();
      const categoryValue = categorySelectInstance.getSelectedValues()[0];
      const howToPayValue = howToPaySelectInstance.getSelectedValues()[0];

      const isInputContentValid = this.validateInputContent(howMuchValue, thingsValue, categoryValue, howToPayValue);
      if (!isInputContentValid) {
        return;
      }

      const todayRecordObject = {
        inOrOut: isSwitchChecked,
        date: dateValue,
        howMuch: howMuchValue,
        things: thingsValue,
        category: categoryValue,
        howToPay: howToPayValue,
      };
      const todayRecordJSON = JSON.stringify(todayRecordObject);

      let todayRecordNumber = localStorage.getItem('day_record_number');
      localStorage.setItem(`day_record_${todayRecordNumber}`, todayRecordJSON);
      localStorage.setItem('day_record_number', ++todayRecordNumber);
      
      setToastDataFunctions('true', 'データを追加しました！', 'toast-success toast-pop');
    });
  }

  // initializing input card content above

  // initializing setting modal content below

  initializeSettingModal() {
    this.printUserCategoryOptions();
    this.printUserHowtopayOptions();
    this.addEventListenerToModalAddOptionsButton();
    this.addEventListenerToModalAddButton();
  }

  printUserCategoryOptions() {
    const userCategoryOptions = localStorage.getItem('user_category_options');
    const userCategoryOptionsArray = userCategoryOptions.split(',');

    for (let i = 0; i < userCategoryOptionsArray.length; i++) {
      const container = document.getElementById('input-card__setting-modal__form-category');
      const template = document.getElementById('input-card__setting-modal__template-checkbox-category');
      const clone = template.content.cloneNode(true);
      clone.querySelector('span').textContent = userCategoryOptionsArray[i];
      container.append(clone);
    }
  }

  printUserHowtopayOptions() {
    const userHowtopayOptions = localStorage.getItem('user_howtopay_options');
    const userHowtopayOptionsArray = userHowtopayOptions.split(',');

    for (let i = 0; i < userHowtopayOptionsArray.length; i++) {
      const container = document.getElementById('input-card__setting-modal__form-howtopay');
      const template = document.getElementById('input-card__setting-modal__template-checkbox-howtopay');
      const clone = template.content.cloneNode(true);
      clone.querySelector('span').textContent = userHowtopayOptionsArray[i];
      container.append(clone);
    }
  }

  addEventListenerToModalAddOptionsButton() {
    const addCategoryButton = document.getElementById('input-card__setting-modal__button-add-category');
    const addHowtopayButton = document.getElementById('input-card__setting-modal__button-add-howtopay');

    addCategoryButton.addEventListener('click', event => {
      const template = document.getElementById('input-card__setting-modal__template-input-category');
      const clone = template.content.cloneNode(true);
      const container = document.getElementById('input-card__setting-modal__form-category');
      container.append(clone);
      const inputDiv = document.getElementById('input-card__setting-modal__div-input-category');
      const input = inputDiv.querySelector('input');

      addCategoryButton.textContent = '決定';

      if (input.value.trim()) {
        const inputValue = document.getElementById('input-card__setting-modal__input-add-category').value.trim();
        const container = document.querySelector('#input-card__setting-modal__form-category  .input-field');
        const template = document.getElementById('input-card__setting-modal__template-checkbox-category');
        const clone = template.content.cloneNode(true);
        clone.querySelector('span').textContent = inputValue;
        container.before(clone);

        inputDiv.remove();
      }
    });

    addHowtopayButton.addEventListener('click', event => {
      const template = document.getElementById('input-card__setting-modal__template-input-howtopay');
      const clone = template.content.cloneNode(true);
      const container = document.getElementById('input-card__setting-modal__form-howtopay');
      container.append(clone);
      const inputDiv = document.getElementById('input-card__setting-modal__div-input-howtopay');
      const input = inputDiv.querySelector('input');

      addHowtopayButton.textContent = '決定';

      if (input.value.trim()) {
        const inputValue = document.getElementById('input-card__setting-modal__input-add-howtopay').value.trim();
        const container = document.querySelector('#input-card__setting-modal__form-howtopay  .input-field');
        const template = document.getElementById('input-card__setting-modal__template-checkbox-howtopay');
        const clone = template.content.cloneNode(true);
        clone.querySelector('span').textContent = inputValue;
        container.before(clone);

        inputDiv.remove();
      }
    });
  }

  addEventListenerToModalAddButton() {
    const addButton = document.getElementById('input-card__setting-modal__button-decide');
    addButton.addEventListener('click', () => {
      const checkboxCategoryOptions = document.getElementById('input-card__setting-modal__form-category').querySelectorAll('label input');
      const checkedCategoryOptionsArray = [];
      for (let i = 0; i < checkboxCategoryOptions.length; i++) {
        if (checkboxCategoryOptions[i].checked) {
          const checkedOptionsName = checkboxCategoryOptions[i].nextElementSibling.textContent;
          checkedCategoryOptionsArray.push(checkedOptionsName);
        }
      }

      const checkboxHowtopayOptions = document.getElementById('input-card__setting-modal__form-howtopay').querySelectorAll('label input');
      const checkedHowtopayOptionsArray = [];
      for (let i = 0; i < checkboxHowtopayOptions.length; i++) {
        if (checkboxHowtopayOptions[i].checked) {
          const checkedOptionsName = checkboxHowtopayOptions[i].nextElementSibling.textContent;
          checkedHowtopayOptionsArray.push(checkedOptionsName);
        }
      }

      function reloadFunction() {
        location.reload(true);
      }
      const isFinished = new Promise(resolve => {
        localStorage.setItem('user_category_options', checkedCategoryOptionsArray);
        localStorage.setItem('user_howtopay_options', checkedHowtopayOptionsArray);
        localStorage.setItem('was_user_options_changed', true);
        resolve(reloadFunction);
      });
      isFinished.then(functionName => {
        functionName();
      });
    });

    const wasUserOptionsChanged = localStorage.getItem('was_user_options_changed');
    if (wasUserOptionsChanged === 'true') {
      setToastDataFunctions(true, 'カテゴリーと支払い手段の選択肢が更新されました！', 'toast-success toast-pop');
      localStorage.setItem('was_user_options_changed', false);
    }
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
