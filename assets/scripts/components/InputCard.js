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

    const datepickerInput = document.getElementById('input-card__input-date');
    datepickerInput.value = `${thisYear}/${thisMonth}/${todayDate}`;
    const datepickerLabel = document.getElementById('input-card__input-date-label');
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

    const selectContainer = document.querySelector('#input-card__select-category');
    for (let i = 0; i < userCategoryOptionsArray.length; i++) {
      const template = document.getElementById('input-card__select-category__template-option-category');
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

    const selectContainer = document.querySelector('#input-card__select-how-to-pay');
    for (let i = 0; i < userHowtopayOptionsArray.length; i++) {
      const template = document.getElementById('input-card__select-how-to-pay__template-option-howtopay');
      const clone = template.content.cloneNode(true);
      clone.querySelector('option').textContent = userHowtopayOptionsArray[i];
      clone.querySelector('option').setAttribute('value', userHowtopayOptionsArray[i]);
      selectContainer.append(clone);
    }
  }

  addEventListenerToCardAddBtn() {
    const addBtn = document.getElementById('input-card__button-add');

    addBtn.addEventListener('click', () => {
      let isSwitchChecked = false;
      const switchBtnInput = document.querySelector('.switch input');
      if (switchBtnInput.checked) {
        isSwitchChecked = true;
      }

      const categorySelect = document.getElementById('input-card__select-category');
      const categorySelectInstance = M.FormSelect.getInstance(categorySelect);
      const howToPaySelect = document.getElementById('input-card__select-how-to-pay');
      const howToPaySelectInstance = M.FormSelect.getInstance(howToPaySelect);

      const dateValue = document.getElementById('input-card__input-date').value;
      const howMuchValue = document.getElementById('input-card__input--how-much').value;
      const thingsValue = document.getElementById('input-card__input-things').value.trim();
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

      let todayRecordNumber = localStorage.getItem('today_record_number');
      localStorage.setItem(`today_record_${todayRecordNumber}`, todayRecordJSON);
      localStorage.setItem('today_record_number', ++todayRecordNumber);

      let todayEachCatgoryHowmuch = localStorage.getItem('today_each_category_howmuch');
      todayEachCatgoryHowmuch = JSON.parse(todayEachCatgoryHowmuch);
      let oldHowmuch = todayEachCatgoryHowmuch[todayRecordObject.category];
      if (!oldHowmuch) {
        oldHowmuch = 0;
      }
      const newHowmuch = +oldHowmuch + +todayRecordObject.howMuch;
      todayEachCatgoryHowmuch[todayRecordObject.category] = newHowmuch;
      todayEachCatgoryHowmuch = JSON.stringify(todayEachCatgoryHowmuch);
      localStorage.setItem('today_each_category_howmuch', todayEachCatgoryHowmuch);

      let todayEachHowtopayHowmuch = localStorage.getItem('today_each_howtopay_howmuch');
      todayEachHowtopayHowmuch = JSON.parse(todayEachHowtopayHowmuch);
      let oldHowmuch2 = todayEachHowtopayHowmuch[todayRecordObject.howToPay];
      if (!oldHowmuch2) {
        oldHowmuch2 = 0;
      }
      const newHowmuch2 = +oldHowmuch2 + +todayRecordObject.howMuch;
      todayEachHowtopayHowmuch[todayRecordObject.howToPay] = newHowmuch2;
      todayEachHowtopayHowmuch = JSON.stringify(todayEachHowtopayHowmuch);
      localStorage.setItem('today_each_howtopay_howmuch', todayEachHowtopayHowmuch);

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
      const container = document.getElementById('modal__input-card__setting__form-category');
      const template = document.getElementById('modal__input-card__setting__template-checkbox-category');
      const clone = template.content.cloneNode(true);
      clone.querySelector('span').textContent = userCategoryOptionsArray[i];
      container.append(clone);
    }
  }

  printUserHowtopayOptions() {
    const userHowtopayOptions = localStorage.getItem('user_howtopay_options');
    const userHowtopayOptionsArray = userHowtopayOptions.split(',');

    for (let i = 0; i < userHowtopayOptionsArray.length; i++) {
      const container = document.getElementById('modal__input-card__setting__form-howtopay');
      const template = document.getElementById('modal__input-card__setting__template-checkbox-howtopay');
      const clone = template.content.cloneNode(true);
      clone.querySelector('span').textContent = userHowtopayOptionsArray[i];
      container.append(clone);
    }
  }

  addEventListenerToModalAddOptionsButton() {
    const addCategoryButton = document.getElementById('modal__input-card__setting__button-add-category');
    const addHowtopayButton = document.getElementById('modal__input-card__setting__button-add-howtopay');

    addCategoryButton.addEventListener('click', () => {
      const template = document.getElementById('modal__input-card__setting__form-category__template-input');
      const clone = template.content.cloneNode(true);
      const container = document.getElementById('modal__input-card__setting__form-category');
      container.append(clone);
      const inputField = document.getElementById('modal__input-card__setting__form-category__template-input__input-field');
      const input = inputField.querySelector('input');

      addCategoryButton.textContent = '決定';

      if (input.value.trim()) {
        const inputValue = document.getElementById('modal__input-card__setting__form-category__template-input__input-field-__input').value.trim();
        const container = document.querySelector('#modal__input-card__setting__form-category__template-input__input-field');
        const template = document.getElementById('modal__input-card__setting__template-checkbox-category');
        const clone = template.content.cloneNode(true);
        clone.querySelector('span').textContent = inputValue;
        container.before(clone);

        inputField.remove();
      }
    });

    addHowtopayButton.addEventListener('click', () => {
      const template = document.getElementById('input-card__setting-modal__template-input-howtopay');
      const clone = template.content.cloneNode(true);
      const container = document.getElementById('modal__input-card__setting__form-howtopay');
      container.append(clone);
      const inputField = document.getElementById('input-card__setting-modal__div-input-howtopay');
      const input = inputField.querySelector('input');

      addHowtopayButton.textContent = '決定';

      if (input.value.trim()) {
        const inputValue = document.getElementById('input-card__setting-modal__input-add-howtopay').value.trim();
        const container = document.getElementById('input-card__setting-modal__div-input-howtopay');
        const template = document.getElementById('modal__input-card__setting__template-checkbox-howtopay');
        const clone = template.content.cloneNode(true);
        clone.querySelector('span').textContent = inputValue;
        container.before(clone);

        inputField.remove();
      }
    });
  }

  addEventListenerToModalAddButton() {
    const addButton = document.getElementById('input-card__setting-modal__button-decide');
    addButton.addEventListener('click', () => {
      const checkboxCategoryOptions = document.getElementById('modal__input-card__setting__form-category').querySelectorAll('label input');
      const checkedCategoryOptionsArray = [];
      for (let i = 0; i < checkboxCategoryOptions.length; i++) {
        if (checkboxCategoryOptions[i].checked) {
          const checkedOptionsName = checkboxCategoryOptions[i].nextElementSibling.textContent;
          checkedCategoryOptionsArray.push(checkedOptionsName);
        }
      }

      const checkboxHowtopayOptions = document.getElementById('modal__input-card__setting__form-howtopay').querySelectorAll('label input');
      const checkedHowtopayOptionsArray = [];
      for (let i = 0; i < checkboxHowtopayOptions.length; i++) {
        if (checkboxHowtopayOptions[i].checked) {
          const checkedOptionsName = checkboxHowtopayOptions[i].nextElementSibling.textContent;
          checkedHowtopayOptionsArray.push(checkedOptionsName);
        }
      }

      localStorage.setItem('user_category_options', checkedCategoryOptionsArray);
      localStorage.setItem('user_howtopay_options', checkedHowtopayOptionsArray);

      setToastDataFunctions(true, 'カテゴリーと支払い手段の選択肢が更新されました！', 'toast-success toast-pop');
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
    $('#input-card__select-category').prop('selectedIndex', 0);
    $('#input-card__select-category').formSelect();
    $('#input-card__select-how-to-pay').prop('selectedIndex', 0);
    $('#input-card__select-how-to-pay').formSelect();
  }
}
