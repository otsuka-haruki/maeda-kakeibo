const year_doughnut = document.getElementById('year_doughnut');
const month_doughnut = document.getElementById('month_doughnut');
const week_doughnut = document.getElementById('week_doughnut');
const day_doughnut = document.getElementById('day_doughnut');

new Chart(year_doughnut, {
  type: 'doughnut',
  data:{
    datasets: [{
      data: [10, 25, 30],
      backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Red',
      'Gray',
      'Green'
    ]
  },
  // options: options
});
new Chart(month_doughnut, {
  type: 'doughnut',
  data:{
    datasets: [{
      data: [10, 15, 30],
      backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ]
  },
  // options: options
});
new Chart(week_doughnut, {
  type: 'doughnut',
  data:{
    datasets: [{
      data: [10, 20, 50],
      backgroundColor: ['#f44336', '#90a4ae', '#4caf50']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ]
  },
  // options: options
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
      'Red',
      'Yellow',
      'Blue'
    ]
  },
  // options: options
});
