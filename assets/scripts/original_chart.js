Chart.defaults.global.elements.point.backgroundColor = 'transparent';
Chart.defaults.global.elements.line.borderCapStyle = "round";

const year_doughnut = document.getElementById('year_doughnut');
const month_doughnut_in = document.getElementById('month_doughnut_in');
const month_doughnut_out = document.getElementById('month_doughnut_out');
const week_doughnut = document.getElementById('week_doughnut');
const week_bar = document.getElementById('week_bar');
const day_doughnut = document.getElementById('day_doughnut');

new Chart(year_doughnut, {
  type: 'doughnut',
  data:{
    datasets: [{
      data: [40, 30, 10],
      backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      '食費',
      '交通費',
      '日用品'
    ]
  },
  // options: options
});

new Chart(month_doughnut_in, {
  type: 'doughnut',
  data:{
    datasets: [{
      data: [50, 15, 30],
      backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      '食費',
      '交通費',
      '日用品'
    ]
  },
  // options: options
});

new Chart(month_doughnut_out, {
  type: 'doughnut',
  data:{
    datasets: [{
      data: [50, 10],
      backgroundColor: ['#00bcd4', '#90a4ae']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      '仕送り',
      'バイト'
    ]
  },
  // options: options
});

new Chart(week_doughnut, {
  type: 'doughnut',
  data:{
    datasets: [{
      data: [55, 10, 20],
      backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      '食費',
      '交通費',
      '日用品'
    ]
  },
  // options: options
});

new Chart(week_bar, {
    type: 'bar',
    data: {
      labels: ['月', '火', '水', '木', '金', '土', '日'],
      datasets: [{
        label: '支出',
        data: [1200, 3400, 2345, 3200, 1540, 1870, 2360],
        backgroundColor: "#ffe082",
        borderColor: "rgba(255,213,79,1)",
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


new Chart(day_doughnut, {
  type: 'doughnut',
  data:{
    datasets: [{
      data: [20, 15, 10],
      backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      '食費',
      '交通費',
      '日用品'
    ]
  },
  // options: options
});
