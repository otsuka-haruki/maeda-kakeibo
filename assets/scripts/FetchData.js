'use strict';

export class FetchData {
  constructor() {
    this.fetchTodayTable();
  }

  fetchTodayTable() {
    const lsData = localStorage.getItem('array1');
    const todayArray = lsData.split(',');
    
    const analysisTodayTableData = document.querySelectorAll('#analysis-today__table tbody tr td');

    const categoryValue = this.convertNumberIntoCategoryValue(+todayArray[4]);
    const howToPayValue = this.convertNumberIntoHowToPayValue(+todayArray[5]);

    analysisTodayTableData[0].textContent = categoryValue;
    analysisTodayTableData[1].textContent = todayArray[3];
    analysisTodayTableData[2].textContent = todayArray[2];
    analysisTodayTableData[3].textContent = howToPayValue;
  }

  convertNumberIntoCategoryValue(num) {
    let categoryValue;
    switch(num) {
      case 1:
        categoryValue = '食費';
        break;
      case 2:
        categoryValue = '衣服';
        break;
      case 3:
        categoryValue = '日用品';
        break;
      case 4:
        categoryValue = '交際費';
        break;
      case 5:
        categoryValue = '光熱費';
        break;
      case 6:
        categoryValue = '交通費';
        break;
    }
    return categoryValue;
  }

  convertNumberIntoHowToPayValue(num) {
    let howToPayValue;
    switch(num) {
      case 1:
        howToPayValue = '現金';
        break;
      case 2:
        howToPayValue = 'クレジットカード';
        break;
      case 3:
        howToPayValue = 'Suica';
        break;
      case 4:
        howToPayValue = '学食パス';
        break;
      case 5:
        howToPayValue = 'Paypay';
        break;
      case 6:
        howToPayValue = 'LinePay';
        break;
    }
    return howToPayValue;
  }
}
