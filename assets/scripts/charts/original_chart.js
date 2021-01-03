'use strict';

export function chartInitialize() {
  Chart.defaults.global.elements.point.backgroundColor = 'transparent';
  Chart.defaults.global.elements.line.borderCapStyle = 'round';
}

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

export function drawChartWeekDoughnut() {
  const week_doughnut = document.getElementById('week_doughnut');
  new Chart(week_doughnut, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [55, 10, 20],
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

export function drawChartWeekBar() {
  const week_bar = document.getElementById('week_bar');
  new Chart(week_bar, {
    type: 'bar',
    data: {
      labels: ['月', '火', '水', '木', '金', '土', '日'],
      datasets: [{
        label: '支出',
        data: [1200, 3400, 2345, 3200, 1540, 1870, 2360],
        backgroundColor: '#ffe082',
        borderColor: 'rgba(255,213,79,1)',
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
