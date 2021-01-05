'use strict';

import {
  setToastDataFunctions
} from '../functions/setToastDataFunctions.js';

export class DayReport {
  constructor() {
    this.setContentToReportToday();
    this.setContentToReportYesterday();
    this.modifyDayRecord();
  }

  // TODO: distinguish in and out
  // TODO: fix dropdown

  setContentToReportToday() {
    const dayRecordNumber = localStorage.getItem('today_record_number');
    const thisWeekObject = JSON.parse(localStorage.getItem('report_week'));
    const todayInfoObject = JSON.parse(localStorage.getItem('today_info'));
    let todaySumOut = 0;
    let todaySumIn = 0;

    for (let i = 0; i < dayRecordNumber; i++) {
      const todayRecordJSON = localStorage.getItem(`today_record_${i}`);
      if (!todayRecordJSON) {
        continue;
      }
      const todayRecordObject = JSON.parse(todayRecordJSON);
      const container = document.getElementById('analysis-today__table');
      const template = document.getElementById('analysis__today__template-table-tbody');
      const clone = template.content.cloneNode(true);
      const tds = clone.querySelectorAll('td');
      const tr = clone.querySelector('tr');
      tr.setAttribute('id', `today_record_${i}`);
      tds[0].textContent = todayRecordObject.category;
      tds[1].textContent = todayRecordObject.things;
      tds[2].textContent = `¥${todayRecordObject.howMuch}`;
      tds[3].textContent = todayRecordObject.howtopay;

      if (todayRecordObject.inOrOut == true) {
        clone.querySelector('tr').classList.add('cyan', 'lighten-3');
        clone.querySelectorAll('td').forEach(element => {
          element.classList.add('border-radius-0');
        });
        todaySumIn = todaySumIn + +todayRecordObject.howMuch;
        thisWeekObject.thisWeek.in.eachDay[todayInfoObject.day] = todaySumIn;

      } else {
        todaySumOut = todaySumOut + +todayRecordObject.howMuch;
        thisWeekObject.thisWeek.out.eachDay[todayInfoObject.day] = todaySumOut;
      }
      container.append(clone);
    }

    const thisWeekJSON = JSON.stringify(thisWeekObject)

    localStorage.setItem('report_week', thisWeekJSON);

    const todayReportSpanOut = document.getElementById('day-report__span-out');
    const todayReportSpanIn = document.getElementById('day-report__span-in');
    todayReportSpanOut.textContent = todaySumOut;
    todayReportSpanIn.textContent = todaySumIn;
  }

  setContentToReportYesterday() {
    const dayRecordNumber = localStorage.getItem('yesterday_record_number');
    let yesterdaySumOut = 0;
    let yesterdaySumIn = 0;

    for (let i = 0; i < dayRecordNumber; i++) {
      const yesterdayRecordJSON = localStorage.getItem(`yesterday_record_${i}`);
      if (!yesterdayRecordJSON) {
        continue;
      }
      const yesterdayRecordObject = JSON.parse(yesterdayRecordJSON);
      const container = document.getElementById('report__day__yesterday__table');
      const template = document.getElementById('report__day__yesterday__template-table-tbody');
      const clone = template.content.cloneNode(true);
      const tds = clone.querySelectorAll('td');
      tds[0].textContent = yesterdayRecordObject.category;
      tds[1].textContent = yesterdayRecordObject.things;
      tds[2].textContent = `¥${yesterdayRecordObject.howMuch}`;
      tds[3].textContent = yesterdayRecordObject.howToPay;
      if (yesterdayRecordObject.inOrOut == true) {
        clone.querySelector('tr').classList.add('cyan', 'lighten-3');
        clone.querySelectorAll('td').forEach(element => {
          element.classList.add('border-radius-0');
        });
        yesterdaySumIn = yesterdaySumIn + +yesterdayRecordObject.howMuch;
      } else {
        yesterdaySumOut = yesterdaySumOut + +yesterdayRecordObject.howMuch;
      }
      container.append(clone);
    }

    const yesterdayReportSpanOut = document.getElementById('report__day__yesterday__span-out');
    const yesterdayReportSpanIn = document.getElementById('report__day__yesterday__span-in');
    yesterdayReportSpanOut.textContent = yesterdaySumOut;
    yesterdayReportSpanIn.textContent = yesterdaySumIn;
  }

  modifyDayRecord() {
    const modifyModal = document.getElementById('modal__report__day__modify-record');
    const tbody = document.querySelectorAll('#analysis-today__table tbody');
    let currentlySelectedRecord;
    tbody.forEach(element => {
      const tr = element.querySelector('tr');
      tr.addEventListener('click', (event) => {
        localStorage.setItem('is_modal_for_modify', true);
        const id = event.target.closest('tr').id;
        currentlySelectedRecord = id;
        const recordDataObject = JSON.parse(localStorage.getItem(id));

        modifyModal.querySelector('#modal__report__day__modify-record__input-howmuch').value = recordDataObject.howMuch;
        modifyModal.querySelector('#modal__report__day__modify-record__input-things').value = recordDataObject.things;
        if (recordDataObject.inOrOut == true) {
          modifyModal.querySelector('#modal__report__day__modify-record__switch').setAttribute('checked', 'checked');
        }
        modifyModal.querySelector('#modal__report__day__modify-record__input-category').value = recordDataObject.category;
        modifyModal.querySelector('#modal__report__day__modify-record__input-howtopay').value = recordDataObject.howtopay;

        const labels = modifyModal.querySelectorAll('label');
        labels.forEach(element => {
          element.classList.add('active');
        })
      });
    });

    const cancelButton = document.getElementById('modal__report__day__modify-record__button-cancel');
    cancelButton.addEventListener('click', () => {
      localStorage.setItem('is_modal_for_modify', false);
    });

    const modifyButton = document.getElementById('modal__report__day__modify-record__button-modify');
    modifyButton.addEventListener('click', () => {
      const inputs = modifyModal.querySelectorAll('input');
      // TODO: 週間・月間・年間を修正する
      setToastDataFunctions('true', '１件のデータを修正しました', 'toast-success toast-pop');
    });

    const deleteButton = document.getElementById('modal__report__day__modify-record__button-delete');
    deleteButton.addEventListener('click', () => {
      localStorage.removeItem(currentlySelectedRecord);
      // TODO: 週間・月間・年間を修正する
      setToastDataFunctions('true', '１件のデータを削除しました', 'toast-success toast-pop');
    });
  }
}
