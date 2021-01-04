'use strict';

export function updateDate() {

  const todayInfoNow = new Date();
  const todayInfoLS = JSON.parse(localStorage.getItem('today_info'));

  if (todayInfoNow.getDate() == todayInfoLS.date) {
    // 同じ日、することなし
    console.log('same day!');
  }
  else {

    // 日が変わるアップデート
    const yesterdayRecordNumber = localStorage.getItem('yesterday_record_number');
    for (let i = 0; i < yesterdayRecordNumber; i++) {
      localStorage.removeItem(`yesterday_record_${i}`)
    }

    const todayRecordNumber = localStorage.getItem('today_record_number');
    localStorage.setItem('yesterday_record_number', todayRecordNumber);
    for (let i = 0; i < todayRecordNumber; i++) {
      const todayRecord = localStorage.getItem(`today_record_${i}`);
      localStorage.setItem(`yesterday_record_${i}`, todayRecord);
      localStorage.removeItem(`today_record_${i}`);
    }
    localStorage.setItem('today_record_number', 0);

    // 週が変わるアップデート
    if (todayInfoNow.getDay() == 1) {
      const weekObject = JSON.parse(localStorage.getItem('report_week'));
      const oldThisWeekObject = weekObject.thisWeek;
      weekObject.lastWeek = oldThisWeekObject;
      weekObject.thisWeek = {out: {eachDay: {},category: {},howtopay: {},},in: {eachDay: {},category: {},howtopay: {},},}
      const newWeekObject = JSON.stringify(weekObject);
      localStorage.setItem('report_week', newWeekObject);
    }

    // 年が変わるアップデート
    if (todayInfoNow.getFullYear() != todayInfoLS.year) {
      // 月オブジェクトを初期化
      const newMonthObject = {
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
      const newMonthJSON = JSON.stringify(newMonthObject);
      localStorage.setItem('report_month', newMonthJSON);

      const yearObject = JSON.parse(localStorage.getItem('report_year'));
      const yearObjectNewYearObjet = {
          in: {
            each_month: {

            },
            category: {

            },
            howtopay: {

            },
          },
          out: {
            each_month: {

            },
            category: {

            },
            howtopay: {

            },
          },
      }
      yearObject[todayInfoNow.getFullYear()] = yearObjectNewYearObjet;
      const newYearJSON = JSON.stringify(yearObject);
      localStorage.setItem('report_year', newYearJSON);
    }



    const updatedTodayInfo = {
      date: todayInfoNow.getDate(),
      day: todayInfoNow.getDay(),
      month: todayInfoNow.getMonth(),
      year: todayInfoNow.getFullYear(),
    };
    const updatedTodayInfoJSON = JSON.stringify(updatedTodayInfo);
    localStorage.setItem('today_info', updatedTodayInfoJSON);
  }
}
