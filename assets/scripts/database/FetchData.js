'use strict';

import { updateDate } from '../functions/updateDate.js';

export class FetchData {
  constructor() {
    this.setDefaultValue();
    updateDate();
    this.showToast();
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

    const todayRecordNumber = localStorage.getItem('today_record_number');
    if (!todayRecordNumber) {
      localStorage.setItem('today_record_number', 0);
    }

    const todayEachCategoryHowmuchJSON = localStorage.getItem('today_each_category_howmuch');
    if (!todayEachCategoryHowmuchJSON) {
      const testobj = {};
      const testjson = JSON.stringify(testobj);
      localStorage.setItem('today_each_category_howmuch', testjson);
    }

    const todayEachHowtopayHowmuchJSON = localStorage.getItem('today_each_howtopay_howmuch');
    if (!todayEachHowtopayHowmuchJSON) {
      const testobj = {};
      const testjson = JSON.stringify(testobj);
      localStorage.setItem('today_each_howtopay_howmuch', testjson);
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
}
