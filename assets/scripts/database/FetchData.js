'use strict';

export class FetchData {
  constructor() {
    this.fetchTodayTable();
  }

  fetchTodayTable() {
    const lsData = localStorage.getItem('array1');
    if (!lsData) {
      console.log('yeah');
      return;
    }
    const todayArray = lsData.split(',');
    const analysisTodayTableData = document.querySelectorAll('#analysis-today__table tbody tr td');

    analysisTodayTableData[0].textContent = todayArray[4];
    analysisTodayTableData[1].textContent = todayArray[3];
    analysisTodayTableData[2].textContent = todayArray[2];
    analysisTodayTableData[3].textContent = todayArray[5];
  }
}
