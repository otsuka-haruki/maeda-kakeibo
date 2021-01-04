'use strict';

import * as chartFunctions from '../charts/original_chart.js';

export class MonthReport {
  constructor() {
    this.setEachMonthContent();
  }

  setEachMonthContent() {
    const container = document.getElementById('report__month');
    const template = container.querySelector('#report__month__template-wrapper');
    const monthObject = JSON.parse(localStorage.getItem('report_month'));
    for (let i = 0; i < 12; i++) {
      const clone = template.content.cloneNode(true);
      clone.querySelector('div').setAttribute('id', `report__month__container-${i}`);

      const valuesOut = Object.values(monthObject[i].out.category);
      let sum = 0;
      valuesOut.forEach(element => {
        sum = sum + +element;
      });
      clone.querySelector('#report__month__card-general #report__month__card-general__span-out').textContent = sum;
      const valuesIn = Object.values(monthObject[i].in.category);
      sum = 0;
      valuesIn.forEach(element => {
        sum = sum + +element;
      });
      clone.querySelector('#report__month__card-general #report__month__card-general__span-in').textContent = sum;

      clone.querySelector('#report__month__card-general').setAttribute('id', `report__month__card-general-${i}`);
      clone.querySelector('#report__month__card-out-category').setAttribute('id', `report__month__card-out-category-${i}`);
      clone.querySelector('#report__month__card-out-howtopay').setAttribute('id', `report__month__card-out-howtopay-${i}`);
      clone.querySelector('#report__month__card-table').setAttribute('id', `report__month__card-table-${i}`);
      clone.querySelector('#report__month__card-in-category').setAttribute('id', `report__month__card-in-category-${i}`);
      clone.querySelector('#report__month__card-in-howtopay').setAttribute('id', `report__month__card-in-howtopay-${i}`);

      let j = i;
      clone.querySelector(`#report__month__card-table-${i}`).querySelector('span').querySelector('span').textContent = ++j;
      container.append(clone);

      // chart-1
      const categoryOutValues = Object.values(monthObject[i].out.category);
      const categoryOutKeys = Object.keys(monthObject[i].out.category);
      chartFunctions.drawChartMonthDoughnut(i, `report__month__card-out-category-${i}`, categoryOutValues, categoryOutKeys);

      // chart-2
      const howtopayOutValues = Object.values(monthObject[i].out.howtopay);
      const howtopayOutKeys = Object.keys(monthObject[i].out.howtopay);
      chartFunctions.drawChartMonthDoughnut(i, `report__month__card-out-howtopay-${i}`, howtopayOutValues, howtopayOutKeys);

      // table-out
      const containerTable = document.getElementById(`report__month__card-table-${i}`).querySelector('table');
      const templateTbody = containerTable.querySelector('template');
      for (let i = 0; i < categoryOutKeys.length; i++) {
        const cloneTbody = templateTbody.content.cloneNode(true);
        cloneTbody.querySelectorAll('td')[0].textContent = categoryOutKeys[i];
        cloneTbody.querySelectorAll('td')[1].textContent = `￥${categoryOutValues[i]}`;
        containerTable.append(cloneTbody);
      }

      // chart-3
      const categoryInValues = Object.values(monthObject[i].in.category);
      const categoryInKeys = Object.keys(monthObject[i].in.category);
      chartFunctions.drawChartMonthDoughnut(i, `report__month__card-in-category-${i}`, categoryInValues, categoryInKeys);

      // table-in
      for (let i = 0; i < categoryInKeys.length; i++) {
        const cloneTbody = templateTbody.content.cloneNode(true);
        cloneTbody.querySelector('tr').classList.add('cyan', 'lighten-3');
        cloneTbody.querySelectorAll('td')[0].textContent = categoryInKeys[i];
        cloneTbody.querySelectorAll('td')[1].textContent = `￥${categoryInValues[i]}`;
        containerTable.append(cloneTbody);
      }

      // chart-4
      const howtopayInValues = Object.values(monthObject[i].in.howtopay);
      const howtopayInKeys = Object.keys(monthObject[i].in.howtopay);
      chartFunctions.drawChartMonthDoughnut(i, `report__month__card-in-howtopay-${i}`, howtopayInValues, howtopayInKeys);
    }
  }
}
