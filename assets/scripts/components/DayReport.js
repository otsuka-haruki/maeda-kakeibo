export class DayReport {
  constructor() {
    this.setContentToReportToday();
    this.setContentToReportYesterday();
  }

  // TODO: distinguish in and out
  // TODO: fix dropdown

  setContentToReportToday() {
    const dayRecordNumber = localStorage.getItem('today_record_number');
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
      tds[0].textContent = todayRecordObject.category;
      tds[1].textContent = todayRecordObject.things;
      tds[2].textContent = `¥${todayRecordObject.howMuch}`;
      tds[3].textContent = todayRecordObject.howToPay;
      if (todayRecordObject.inOrOut == true) {
        clone.querySelector('tr').classList.add('cyan', 'lighten-3');
        clone.querySelectorAll('td').forEach(element => {
          element.classList.add('border-radius-0');
        });
        todaySumIn = todaySumIn + +todayRecordObject.howMuch;
      } else {
        todaySumOut = todaySumOut + +todayRecordObject.howMuch;
      }
      container.append(clone);
    }

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
}
