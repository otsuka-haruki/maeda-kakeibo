'use strict';

export function updateDate() {
  const todayInfoNow = new Date();
  const todayInfoLS = JSON.parse(localStorage.getItem('today_info'));

  if (todayInfoNow.getDate() == todayInfoLS.date) {
    // 同じ日、することなし
    console.log('same day!');
  } else {
    // 日が変わるアップデート
    document.getElementById('update').addEventListener('click', () => {
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

      const todayEachCategoryHowmuch = localStorage.getItem('today_each_category_howmuch');
      const todayEachHowtopayHowmuch = localStorage.getItem('today_each_howtopay_howmuch');
      localStorage.setItem('yesterday_each_category_howmuch', todayEachCategoryHowmuch);
      localStorage.setItem('yesterday_each_howtopay_howmuch', todayEachHowtopayHowmuch);
      localStorage.removeItem('today_each_category_howmuch');
      localStorage.removeItem('today_each_howtopay_howmuch');


    });
    // 週が変わるアップデート
    // 月が変わるアップデート
    // 年が変わるアップデート

  }
}
