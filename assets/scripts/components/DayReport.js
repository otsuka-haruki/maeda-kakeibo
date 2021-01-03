export class DayReport {
  constructor() {
    this.printTodayReportTable();
    this.printTodayReportSum();
    this.printYesterdayReportTable();
    this.printYesterdayReportSum();
  }

  // TODO: distinguish in and out
  // TODO: fix dropdown
  // TODO:

  printTodayReportTable() {
    const dayRecordNumber = localStorage.getItem('today_record_number');
    const todayRecord = localStorage.getItem('today_record_0');
    if (!todayRecord) {
      return;
    }

    for (let i = 0; i < dayRecordNumber; i++) {
      const todayRecordJSON = localStorage.getItem(`today_record_${i}`);
      if (!todayRecordJSON) {
        continue;
      }
      const todayRecordObject = JSON.parse(todayRecordJSON);
      const container = document.getElementById('analysis-today__table');
      const template = document.getElementById('analysis__today__template-table-tbody');
      const clone = template.content.cloneNode(true);
      if (todayRecordObject.inOrOut == true) {
        clone.querySelector('tr').classList.add('cyan');
        clone.querySelectorAll('td').forEach(element => {
          element.classList.add('border-radius-0');
        });
      }
      const tds = clone.querySelectorAll('td');
      tds[0].textContent = todayRecordObject.category;
      tds[1].textContent = todayRecordObject.things;
      tds[2].textContent = `¥${todayRecordObject.howMuch}`;
      tds[3].textContent = todayRecordObject.howToPay;
      container.append(clone);
    }
  }

  printTodayReportSum() {
    const todayEachCategoryHowmuchJSON = localStorage.getItem('today_each_category_howmuch');
    const todayEachCategoryHowmuch = JSON.parse(todayEachCategoryHowmuchJSON);
    if (Object.keys(todayEachCategoryHowmuch).length == 0) {
      return;
    }
    const todaySum = Object.values(todayEachCategoryHowmuch).reduce(function(a, b) {
      return a + b;
    });
    const todayReportSpanOut = document.getElementById('day-report__span-out');
    todayReportSpanOut.textContent = todaySum;
  }

  printYesterdayReportTable() {
    const dayRecordNumber = localStorage.getItem('yesterday_record_number');
    const yesterdayRecord = localStorage.getItem('yesterday_record_0');
    if (!yesterdayRecord) {
      return;
    }

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
      container.append(clone);
    }
  }

  printYesterdayReportSum() {
    const yesterdayEachCategoryHowmuchJSON = localStorage.getItem('yesterday_each_category_howmuch');
    const yesterdayEachCategoryHowmuch = JSON.parse(yesterdayEachCategoryHowmuchJSON);
    if (!yesterdayEachCategoryHowmuch) {
      return;
    }
    const yesterdaySum = Object.values(yesterdayEachCategoryHowmuch).reduce(function(a, b) {
      return a + b;
    });
    const yesterdayReportSpanOut = document.getElementById('report__day__yesterday__span-out');
    yesterdayReportSpanOut.textContent = yesterdaySum;
  }
}
