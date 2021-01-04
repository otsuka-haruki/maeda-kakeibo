'use strict';

import * as chartFunctions from '../charts/original_chart.js';

export class YearReport {
  constructor() {
    this.setEachYearContainer();
    this.setYearTabs();
  }

  setEachYearContainer() {
    const container = document.getElementById('report__year');
    const template = container.querySelector('#report__year__template-container');
    const yearObject = JSON.parse(localStorage.getItem('report_year'));
    const yearKeys = Object.keys(yearObject);
    for (let i = 0; i < yearKeys.length; i++) {
      const yearNumber = yearKeys[i]
      const clone = template.content.cloneNode(true);
      clone.querySelector('div').setAttribute('id', `report__year__container-${yearNumber}`);

      const valuesOut = Object.values(yearObject[yearNumber].out.category);
      let sum = 0;
      valuesOut.forEach(element => {
        sum = sum + +element;
      });
      clone.querySelector('#report__year__card-general #report__year__card-general__span-out').textContent = sum;
      const valuesIn = Object.values(yearObject[yearNumber].in.category);
      sum = 0;
      valuesIn.forEach(element => {
        sum = sum + +element;
      });
      clone.querySelector('#report__year__card-general #report__year__card-general__span-in').textContent = sum;

      clone.querySelector('#report__year__card-general').setAttribute('id', `report__year__card-general-${yearNumber}`);
      clone.querySelector('#report__year__card-bar-out').setAttribute('id', `report__year__card-bar-out-${yearNumber}`);
      clone.querySelector('#report__year__card-out-category').setAttribute('id', `report__year__card-out-category-${yearNumber}`);
      clone.querySelector('#report__year__card-out-howtopay').setAttribute('id', `report__year__card-out-howtopay-${yearNumber}`);
      clone.querySelector('#report__year__card-table').setAttribute('id', `report__year__card-table-${yearNumber}`);
      clone.querySelector('#report__year__card-bar-in').setAttribute('id', `report__year__card-bar-in-${yearNumber}`);
      clone.querySelector('#report__year__card-in-category').setAttribute('id', `report__year__card-in-category-${yearNumber}`);
      clone.querySelector('#report__year__card-in-howtopay').setAttribute('id', `report__year__card-in-howtopay-${yearNumber}`);

      clone.querySelector(`#report__year__card-table-${yearNumber}`).querySelector('span').querySelector('span').textContent = +yearNumber;
      container.append(clone);

      // bar-1
      const eachMonthOutValues = Object.values(yearObject[yearNumber].out.each_month);
      chartFunctions.drawChartYearBar(`report__year__card-bar-out-${yearNumber}`, eachMonthOutValues, 'out');

      // chart-1
      const categoryOutValues = Object.values(yearObject[yearNumber].out.category);
      const categoryOutKeys = Object.keys(yearObject[yearNumber].out.category);
      chartFunctions.drawChartYearDoughnut(`report__year__card-out-category-${yearNumber}`, categoryOutValues, categoryOutKeys);

      // chart-2
      const howtopayOutValues = Object.values(yearObject[yearNumber].out.howtopay);
      const howtopayOutKeys = Object.keys(yearObject[yearNumber].out.howtopay);
      chartFunctions.drawChartYearDoughnut(`report__year__card-out-howtopay-${yearNumber}`, howtopayOutValues, howtopayOutKeys);

      // table-out
      const containerTable = document.getElementById(`report__year__card-table-${yearNumber}`).querySelector('table');
      const templateTbody = containerTable.querySelector('template');
      for (let i = 0; i < categoryOutKeys.length; i++) {
        const cloneTbody = templateTbody.content.cloneNode(true);
        cloneTbody.querySelectorAll('td')[0].textContent = categoryOutKeys[i];
        cloneTbody.querySelectorAll('td')[1].textContent = `￥${categoryOutValues[i]}`;
        containerTable.append(cloneTbody);
      }

      // bar-2
      const eachMonthInValues = Object.values(yearObject[yearNumber].in.each_month);
      chartFunctions.drawChartYearBar(`report__year__card-bar-in-${yearNumber}`, eachMonthInValues, 'in');

      // chart-3
      const categoryInValues = Object.values(yearObject[yearNumber].in.category);
      const categoryInKeys = Object.keys(yearObject[yearNumber].in.category);
      chartFunctions.drawChartYearDoughnut(`report__year__card-in-category-${yearNumber}`, categoryInValues, categoryInKeys);

      // table-in
      for (let i = 0; i < categoryInKeys.length; i++) {
        const cloneTbody = templateTbody.content.cloneNode(true);
        cloneTbody.querySelector('tr').classList.add('cyan', 'lighten-3');
        cloneTbody.querySelectorAll('td')[0].textContent = categoryInKeys[i];
        cloneTbody.querySelectorAll('td')[1].textContent = `￥${categoryInValues[i]}`;
        containerTable.append(cloneTbody);
      }

      // chart-4
      const howtopayInValues = Object.values(yearObject[yearNumber].in.howtopay);
      const howtopayInKeys = Object.keys(yearObject[yearNumber].in.howtopay);
      chartFunctions.drawChartYearDoughnut(`report__year__card-in-howtopay-${yearNumber}`, howtopayInValues, howtopayInKeys);
    }
  }

  setYearTabs() {
    const container = document.getElementById('report__year').querySelector('.tabs');
    const template = container.querySelector('template');
    const reportYearObject = JSON.parse(localStorage.getItem('report_year'));
    const yearKeys = Object.keys(reportYearObject);
    for (let i = 0; i < yearKeys.length; i++) {
      const clone = template.content.cloneNode(true);
      clone.querySelector('li a').setAttribute('href', `#report__year__container-${yearKeys[i]}`);
      clone.querySelector('li a').textContent = yearKeys[i];
      container.append(clone);
    }
  }


}
