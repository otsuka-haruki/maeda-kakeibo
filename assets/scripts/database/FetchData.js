'use strict';

export class FetchData {
  constructor() {
    this.setDefaultValue();
    this.dayUpdate();
    this.showToast();
    this.printTodayReport();
  }

  setDefaultValue() {
    const userCategoryOptions = localStorage.getItem('user_category_options');
    if (!userCategoryOptions) {
      localStorage.setItem('user_category_options', ['以下、デフォルト', '自由に変更してください', '食費', '交通費', '光熱費']);
    }
    const userHowtopayOptions = localStorage.getItem('user_howtopay_options');
    if (!userHowtopayOptions) {
      localStorage.setItem('user_howtopay_options', ['以下、デフォルト', '自由に変更してください', '現金', 'クレジットカード', 'Paypay']);
    }

    const toast = localStorage.getItem('toast_to_show');
    if (!toast) {
      const welcomeToastObject = {
        bool: true,
        message: 'ようこそ、家計簿アプリへ！',
        className: 'toast-success toast-pop',
      };
      const welcomeToastJSON = JSON.stringify(welcomeToastObject);
      localStorage.setItem('toast_to_show', welcomeToastJSON);
    }

    const dateData = new Date();
    const today = dateData.getDay();
    const todayLSData = localStorage.getItem('today_date');
    if (!todayLSData) {
      localStorage.setItem('today_date', today);
    }

    const todayRecordNumber = localStorage.getItem('day_record_number');
    if (!todayRecordNumber) {
      localStorage.setItem('day_record_number', 0);
    }

  }

  dayUpdate() {
    const dateData = new Date();
    const today = dateData.getDay();
    const todayLSData = localStorage.getItem('today_date');
    if (today == todayLSData) {
      console.log('same day!');
    } else {
      console.log('day changed!');
    }
  }

  showToast() {
    const toastJSON = localStorage.getItem('toast_to_show');
    const toastObject = JSON.parse(toastJSON);
    if (toastObject.bool == 'true') {
      M.toast({
        html: toastObject.message,
        displayLength: 5000,
        classes: toastObject.className,
      });
      localStorage.setItem('toast_to_show', false);
    }
  }

  printTodayReport() {
    this.printTodayReportTable();
    this.printTodayReportChart();
  }

  printTodayReportTable() {
    const dayRecordNumber = localStorage.getItem('day_record_number');
    const todayRecord = localStorage.getItem('day_record_0');
    if (!todayRecord) {
      return;
    }

    for (let i = 0; i < dayRecordNumber; i++) {
      const todayRecordJSON = localStorage.getItem(`day_record_${i}`);
      const todayRecordObject = JSON.parse(todayRecordJSON);
      const container = document.getElementById('analysis-today__table');
      const template = document.getElementById('analysis__today__template-table-tbody');
      const clone = template.content.cloneNode(true);
      const tds = clone.querySelectorAll('td');
      tds[0].textContent = todayRecordObject.category;
      tds[1].textContent = todayRecordObject.things;
      tds[2].textContent = `¥${todayRecordObject.howMuch}`;
      tds[3].textContent = todayRecordObject.howToPay;
      container.append(clone);
    }
  }

  printTodayReportChart(){

  }

}
