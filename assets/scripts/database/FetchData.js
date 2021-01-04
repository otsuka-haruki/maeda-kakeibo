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

    const today = new Date();
    const todayInfoLocalStorage = localStorage.getItem('today_info');
    if (!todayInfoLocalStorage) {
      const todayInfoObject = {
        day: today.getDay(),
        date: today.getDate(),
        month: today.getMonth(),
        year: today.getFullYear(),
      };
      const todayInfoJSON = JSON.stringify(todayInfoObject)
      localStorage.setItem('today_info', todayInfoJSON);
    }

    const todayRecordNumber = localStorage.getItem('today_record_number');
    if (!todayRecordNumber) {
      localStorage.setItem('today_record_number', 0);
    }

    this.setInitialLocalStorageJSON('today_each_category_howmuch');
    this.setInitialLocalStorageJSON('today_each_howtopay_howmuch');

    const hasReportWeekJSON = localStorage.getItem('report_week');
    if (!hasReportWeekJSON) {
      const initialObject = {
        thisWeek: {
          out: {
            eachDay: {

            },
            category: {

            },
            howtopay: {

            },
          },
          in: {
            eachDay: {

            },
            category: {

            },
            howtopay: {

            },
          },
        },
        lastWeek: {out: {eachDay: {},category: {},howtopay: {},},in: {eachDay: {},category: {},howtopay: {},},},
      };
      const initialJSON = JSON.stringify(initialObject);
      localStorage.setItem('report_week', initialJSON);
    }

    const hasMonthJSON = localStorage.getItem('report_month');
    if (!hasMonthJSON) {
      const initialObject = {
        // 0: {
        //   in: {
        //     category: {
        //       '臨時収入': 1200,
        //       'お小遣い': 200,
        //     },
        //     howtopay: {
        //       '現金': 200,
        //       'Linepay': 1200,
        //     },
        //   },
        //   out: {
        //     category: {
        //       '食費': 3000,
        //       '交通費': 1600,
        //     },
        //     howtopay: {
        //       'Paypay': 3000,
        //       'Suica': 1600,
        //     },
        //   },
        // },
        // 1: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        // 2: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        // 3: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        // 4: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        // 5: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        // 6: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        // 7: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        // 8: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        // 9: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        // 10: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        // 11: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        0: {
          in: {
            category: {

            },
            howtopay: {

            },
          },
          out: {
            category: {

            },
            howtopay: {

            },
          },
        },
        1: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        2: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        3: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        4: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        5: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        6: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        7: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        8: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        9: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        10: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
        11: {in: {category: {},howtopay: {},},out: {category: {},howtopay: {},},},
      }
      const initialJSON = JSON.stringify(initialObject);
      localStorage.setItem('report_month', initialJSON);
    }

  }

  setInitialLocalStorageJSON(localStorageKeyName) {
    const hasJSON = localStorage.getItem(localStorageKeyName);
    if (!hasJSON) {
      const initialObject = {};
      const initialJSON = JSON.stringify(initialObject);
      localStorage.setItem(localStorageKeyName, initialJSON);
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
