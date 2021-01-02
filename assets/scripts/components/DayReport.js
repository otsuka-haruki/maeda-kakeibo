export class DayReport {
  constructor() {
    this.printTodayReportTable();
    this.printTodayReportChart();
  }

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
      const tds = clone.querySelectorAll('td');
      tds[0].textContent = todayRecordObject.category;
      tds[1].textContent = todayRecordObject.things;
      tds[2].textContent = `¥${todayRecordObject.howMuch}`;
      tds[3].textContent = todayRecordObject.howToPay;
      container.append(clone);
    }
  }

  printTodayReportChart() {
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
}
