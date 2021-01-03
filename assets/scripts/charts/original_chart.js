'use strict';

// ここから下、僕のカスタマイズ

export function chartInitialize() {
  Chart.defaults.global.elements.point.backgroundColor = 'transparent';
  Chart.defaults.global.elements.line.borderCapStyle = 'round';
}

// ここから下、年間のチャート

export function drawChartYearDoughnut() {
  const year_doughnut = document.getElementById('year_doughnut');
  new Chart(year_doughnut, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [40, 30, 10],
        backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
      }],

      labels: [
        '食費',
        '交通費',
        '日用品'
      ]
    },
    // options: options
  });
}

// ここから下、月間のチャート

export function drawChartMonthDoughnutIn() {
  const month_doughnut_in = document.getElementById('month_doughnut_in');
  new Chart(month_doughnut_in, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [50, 15, 30],
        backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
      }],

      labels: [
        '食費',
        '交通費',
        '日用品'
      ]
    },
    // options: options
  });
}
export function drawChartMonthDoughnutOut() {
  const month_doughnut_out = document.getElementById('month_doughnut_out');
  new Chart(month_doughnut_out, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [50, 10],
        backgroundColor: ['#00bcd4', '#90a4ae']
      }],

      labels: [
        '仕送り',
        'バイト'
      ]
    },
    // options: options
  });
}

// ここから下、週間のチャート

// ここから下、週間支出のチャート

export function drawChartThisWeekBarOut() {
  const thisWeekObject = JSON.parse(localStorage.getItem('report_week'));
  if (!thisWeekObject) {
    return;
  }
  const values = Object.values(thisWeekObject.thisWeek.out.eachDay);
  const valueArray = [];
  for (let i = 0; i < values.length; i++) {
    valueArray.push(values[i]);
  }
  const sundayValue = valueArray.shift();
  valueArray.push(sundayValue);

  const weekBarOut = document.getElementById('this-week-bar-out');
  new Chart(weekBarOut, {
    type: 'bar',
    data: {
      labels: ['月', '火', '水', '木', '金', '土', '日'],
      datasets: [{
        label: '支出',
        data: valueArray,
        backgroundColor: '#ffe082',
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

export function drawChartThisWeekDoughnutOutCategory() {
  const thisWeekObject = JSON.parse(localStorage.getItem('report_week'));
  if (!thisWeekObject) {
    return;
  }
  const keys = Object.keys(thisWeekObject.thisWeek.out.category);
  const keyArray = [];
  for (let i = 0; i < keys.length; i++) {
    keyArray.push(keys[i]);
  }
  const values = Object.values(thisWeekObject.thisWeek.out.category);
  const valueArray = [];
  for (let i = 0; i < values.length; i++) {
    valueArray.push(values[i]);
  }

  const weekDoughnutOut = document.getElementById('this-week-doughnut-out-category');
  new Chart(weekDoughnutOut, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: valueArray,
        backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
      }],
      labels: keyArray,
    },
    // options: options
  });
}

export function drawChartThisWeekDoughnutOutHowtopay() {
  const thisWeekObject = JSON.parse(localStorage.getItem('report_week'));
  if (!thisWeekObject) {
    return;
  }
  const keys = Object.keys(thisWeekObject.thisWeek.out.howtopay);
  const keyArray = [];
  for (let i = 0; i < keys.length; i++) {
    keyArray.push(keys[i]);
  }
  const values = Object.values(thisWeekObject.thisWeek.out.howtopay);
  const valueArray = [];
  for (let i = 0; i < values.length; i++) {
    valueArray.push(values[i]);
  }

  const weekDoughnutOut = document.getElementById('this-week-doughnut-out-howtopay');
  new Chart(weekDoughnutOut, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: valueArray,
        backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
      }],
      labels: keyArray,
    },
    // options: options
  });
}

// ここから下、週間収入のチャート

export function drawChartThisWeekBarIn() {
  const thisWeekObject = JSON.parse(localStorage.getItem('report_week'));
  if (!thisWeekObject) {
    return;
  }
  const values = Object.values(thisWeekObject.thisWeek.in.eachDay);
  const valueArray = [];
  for (let i = 0; i < values.length; i++) {
    valueArray.push(values[i]);
  }
  const sundayValue = valueArray.shift();
  valueArray.push(sundayValue);

  const weekBarOut = document.getElementById('this-week-bar-in');
  new Chart(weekBarOut, {
    type: 'bar',
    data: {
      labels: ['月', '火', '水', '木', '金', '土', '日'],
      datasets: [{
        label: '収入',
        data: valueArray,
        backgroundColor: '#ffe082',
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

export function drawChartThisWeekDoughnutInCategory() {
  const thisWeekObject = JSON.parse(localStorage.getItem('report_week'));
  if (!thisWeekObject) {
    return;
  }
  const keys = Object.keys(thisWeekObject.thisWeek.in.category);
  const keyArray = [];
  for (let i = 0; i < keys.length; i++) {
    keyArray.push(keys[i]);
  }
  const values = Object.values(thisWeekObject.thisWeek.in.category);
  const valueArray = [];
  for (let i = 0; i < values.length; i++) {
    valueArray.push(values[i]);
  }

  const weekDoughnutOut = document.getElementById('this-week-doughnut-in-category');
  new Chart(weekDoughnutOut, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: valueArray,
        backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
      }],
      labels: keyArray,
    },
    // options: options
  });
}

export function drawChartThisWeekDoughnutInHowtopay() {
  const thisWeekObject = JSON.parse(localStorage.getItem('report_week'));
  if (!thisWeekObject) {
    return;
  }
  const keys = Object.keys(thisWeekObject.thisWeek.in.howtopay);
  const keyArray = [];
  for (let i = 0; i < keys.length; i++) {
    keyArray.push(keys[i]);
  }
  const values = Object.values(thisWeekObject.thisWeek.in.howtopay);
  const valueArray = [];
  for (let i = 0; i < values.length; i++) {
    valueArray.push(values[i]);
  }

  const weekDoughnutOut = document.getElementById('this-week-doughnut-in-howtopay');
  new Chart(weekDoughnutOut, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: valueArray,
        backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
      }],
      labels: keyArray,
    },
    // options: options
  });
}

// ここから下、週間収入（先週）のチャート
export function drawChartLastWeekBarOut() {
  const lastWeekObject = JSON.parse(localStorage.getItem('report_week'));
  const values = Object.values(lastWeekObject.lastWeek.out.eachDay);
  const valueArray = [];
  for (let i = 0; i < values.length; i++) {
    valueArray.push(values[i]);
  }
  const sundayValue = valueArray.shift();
  valueArray.push(sundayValue);

  const weekBarOut = document.getElementById('last-week-bar-out');
  new Chart(weekBarOut, {
    type: 'bar',
    data: {
      labels: ['月', '火', '水', '木', '金', '土', '日'],
      datasets: [{
        label: '支出',
        data: valueArray,
        backgroundColor: '#ffe082',
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

export function drawChartLastWeekDoughnutOutCategory() {
  const lastWeekObject = JSON.parse(localStorage.getItem('report_week'));
  if (!lastWeekObject) {
    return;
  }
  const keys = Object.keys(lastWeekObject.lastWeek.out.category);
  const keyArray = [];
  for (let i = 0; i < keys.length; i++) {
    keyArray.push(keys[i]);
  }
  const values = Object.values(lastWeekObject.lastWeek.out.category);
  const valueArray = [];
  for (let i = 0; i < values.length; i++) {
    valueArray.push(values[i]);
  }

  const weekDoughnutOut = document.getElementById('last-week-doughnut-out-category');
  new Chart(weekDoughnutOut, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: valueArray,
        backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
      }],
      labels: keyArray,
    },
    // options: options
  });
}

export function drawChartLastWeekDoughnutOutHowtopay() {
  const lastWeekObject = JSON.parse(localStorage.getItem('report_week'));
  if (!lastWeekObject) {
    return;
  }
  const keys = Object.keys(lastWeekObject.lastWeek.out.howtopay);
  const keyArray = [];
  for (let i = 0; i < keys.length; i++) {
    keyArray.push(keys[i]);
  }
  const values = Object.values(lastWeekObject.lastWeek.out.howtopay);
  const valueArray = [];
  for (let i = 0; i < values.length; i++) {
    valueArray.push(values[i]);
  }

  const weekDoughnutOut = document.getElementById('last-week-doughnut-out-howtopay');
  new Chart(weekDoughnutOut, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: valueArray,
        backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
      }],
      labels: keyArray,
    },
    // options: options
  });
}

// ここから下、週間収入のチャート

export function drawChartLastWeekBarIn() {
  const lastWeekObject = JSON.parse(localStorage.getItem('report_week'));
  const values = Object.values(lastWeekObject.lastWeek.in.eachDay);
  const valueArray = [];
  for (let i = 0; i < values.length; i++) {
    valueArray.push(values[i]);
  }
  const sundayValue = valueArray.shift();
  valueArray.push(sundayValue);

  const weekBarOut = document.getElementById('last-week-bar-in');
  new Chart(weekBarOut, {
    type: 'bar',
    data: {
      labels: ['月', '火', '水', '木', '金', '土', '日'],
      datasets: [{
        label: '収入',
        data: valueArray,
        backgroundColor: '#ffe082',
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

export function drawChartLastWeekDoughnutInCategory() {
  const lastWeekObject = JSON.parse(localStorage.getItem('report_week'));
  const keys = Object.keys(lastWeekObject.lastWeek.in.category);
  const keyArray = [];
  for (let i = 0; i < keys.length; i++) {
    keyArray.push(keys[i]);
  }
  const values = Object.values(lastWeekObject.lastWeek.in.category);
  const valueArray = [];
  for (let i = 0; i < values.length; i++) {
    valueArray.push(values[i]);
  }

  const weekDoughnutOut = document.getElementById('last-week-doughnut-in-category');
  new Chart(weekDoughnutOut, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: valueArray,
        backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
      }],
      labels: keyArray,
    },
    // options: options
  });
}

export function drawChartLastWeekDoughnutInHowtopay() {
  const lastWeekObject = JSON.parse(localStorage.getItem('report_week'));
  const keys = Object.keys(lastWeekObject.lastWeek.in.howtopay);
  const keyArray = [];
  for (let i = 0; i < keys.length; i++) {
    keyArray.push(keys[i]);
  }
  const values = Object.values(lastWeekObject.lastWeek.in.howtopay);
  const valueArray = [];
  for (let i = 0; i < values.length; i++) {
    valueArray.push(values[i]);
  }

  const weekDoughnutOut = document.getElementById('last-week-doughnut-in-howtopay');
  new Chart(weekDoughnutOut, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: valueArray,
        backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
      }],
      labels: keyArray,
    },
    // options: options
  });
}

export function drawTodayChart() {
  (function() {
    const dayDoughnutOut = document.getElementById('today-doughnut-out');
    const todayCategoryObject = JSON.parse(localStorage.getItem('today_each_category_howmuch'));
    if (!todayCategoryObject) {
      return;
    }
    const keys = Object.keys(todayCategoryObject);
    const keyArray = [];
    for (let i = 0; i < keys.length; i++) {
      keyArray.push(keys[i]);
    }
    const values = Object.values(todayCategoryObject);
    const valueArray = [];
    for (let i = 0; i < values.length; i++) {
      valueArray.push(values[i]);
    }

    new Chart(dayDoughnutOut, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: valueArray,
          backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
        }],

        labels: keyArray,
      },
      // options: options
    });
  }());

  (function () {
    const dayDoughnutIn = document.getElementById('today-doughnut-in');
    const todayHowtopayObject = JSON.parse(localStorage.getItem('today_each_howtopay_howmuch'));
    if (!todayHowtopayObject) {
      return;
    }
    const keys = Object.keys(todayHowtopayObject);
    const keyArray = [];
    for (let i = 0; i < keys.length; i++) {
      keyArray.push(keys[i]);
    }
    const values = Object.values(todayHowtopayObject);
    const valueArray = [];
    for (let i = 0; i < values.length; i++) {
      valueArray.push(values[i]);
    }
    new Chart(dayDoughnutIn, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: valueArray,
          backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
        }],

        labels: keyArray,
      },
      // options: options
    });
  }());
}
