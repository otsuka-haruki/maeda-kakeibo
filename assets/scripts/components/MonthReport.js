'use strict';

export class MonthReport {
  constructor() {
    this.setEachMonthWrapper();
  }

  setEachMonthWrapper() {
    const container = document.getElementById('report__month');
    const template = container.querySelector('#report__month__template-wrapper');
    const monthObject = JSON.parse(localStorage.getItem('report_month'));
    for (let i = 0; i < 12; i++) {
      const clone = template.content.cloneNode(true);
      clone.querySelector('div').setAttribute('id', `report__month__template-wrapper__container-${i}`);
      let j = i;
      clone.querySelector('#report__month__card-table span span').textContent = ++j;
      container.append(clone);
    }
  }
}
