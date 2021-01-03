'use strict';

export function updateDate() {
  // TODO: １回変えたらそれで終わりにする
  const todayInfoNow = new Date();
  const todayInfoLS = JSON.parse(localStorage.getItem('today_info'));

  if (todayInfoNow.getDate() == todayInfoLS.date) {
    // 同じ日、することなし
    console.log('same day!');
  } else {
    // 日が変わるアップデート、下のコードはちゃんと動く（はず）、安全のためコメントアウトしている
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
    }

    const updatedTodayInfo = {
      date: todayInfoNow.getDate(),
      day: todayInfoNow.getDay(),
      month: todayInfoNow.getMonth(),
      year: todayInfoNow.getFullYear(),
    };
    const updatedTodayInfoJSON = JSON.stringify(updatedTodayInfo);
    localStorage.setItem('today_info', updatedTodayInfoJSON);
    alert('new week! Ha!');
  }
}
