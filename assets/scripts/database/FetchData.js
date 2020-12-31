'use strict';

export class FetchData {
  constructor() {
    this.fetchTodayTable();
  }

  fetchTodayTable() {

    const todaySwitchLS = localStorage.getItem('today_switch_array');
    const todaySwitchArray = todaySwitchLS.split(',');
    // const todayDateLS = localStorage.getItem('today_date_array');
    // const todayDateArray = todayDateLS.split(',');
    const todayHowmuchLS = localStorage.getItem('today_howmuch_array');
    const todayHowmuchArray = todayHowmuchLS.split(',');
    const todayThingsLS = localStorage.getItem('today_things_array');
    const todayThingsArray = todayThingsLS.split(',');
    const todayCategoryLS = localStorage.getItem('today_category_array');
    const todayCategoryArray = todayCategoryLS.split(',');
    const todayHowtopayLS = localStorage.getItem('today_howtopay_array');
    const todayHowtopayArray = todayHowtopayLS.split(',');

    for (let i = 0; i < todaySwitchArray.length; i++) {
      const container = document.getElementById('analysis-today__table');
      const template = document.getElementById('analysis__today__template-table-tbody');
      const clone = template.content.cloneNode(true);
      const tds = clone.querySelectorAll('td');
      tds[0].textContent = todayCategoryArray[i];
      tds[1].textContent = todayThingsArray[i];
      tds[2].textContent = `¥${todayHowmuchArray[i]}`;
      tds[3].textContent = todayHowtopayArray[i];
      container.append(clone);
    }
  }
}
