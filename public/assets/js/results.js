//  labels along the x-axis
var years = ['Today', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
const Chart = require("chart.js")

// For drawing the lines
var physical = [0.24, 0.17, -0.55, 0.84, -0.98, 0.98, 0.71];
var emotional = [0.97, -0.38, -0.49, 0.98, -0.73, -0.08, 0.84];
var intellectual = [-0.44, -0.71, 0.90, 0.13, -0.98, 0.51, 0.63];


var ctx = document.getElementById("myChart");
Chart.defaults.global.defaultFontColor = 'white';
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: physical,
        label: "Physical",
        borderColor: "#3e95cd",
        fill: false
      },
      {
        data: emotional,
        label: "Emotional",
        borderColor: "#8e5ea2",
        fill: false
      },
      {
        data: intellectual,
        label: "Intellectual",
        borderColor: "#c3462e",
        fill: false
      }
    ]
  },

    options: {
    scales: {
      yAxes: [{
        ticks: {
          min: -1,
          max: 1
          },
          gridLines: {
              color: '#6d6e71',
              zeroLineColor: '#c9ad54'
        }
            }],
            xAxes: [{
                gridLines: {
                    color: '#6d6e71'
            }
        }]  
    }
  }
});



$('#btn-compat').on('click', function (event) {
  event.preventDefault();
  
  var physical = [0.24, 0.17, -0.55, 0.84, -0.98, 0.98, 0.71];
  var emotional = [0.97, -0.38, -0.49, 0.98, -0.73, -0.08, 0.84];
  var intellectual = [-0.44, -0.71, 0.90, 0.13, -0.98, 0.51, 0.63];
  var physicalCompat = [0.30, 0.29, -0.75, 0.94, -0.28, 0.88, 0.41];
  var emotionalCompat = [0.87, 0.38, -0.59, 0.98, -0.70, -0.28, 0.81];
  var intellectualCompat = [-0.24, -0.09, 0.60, 0.23, -0.08, 0.61, 0.68];

  var years = ['Today', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];  
  
  var ctx = document.getElementById("myChart");
  Chart.defaults.global.defaultFontColor = 'white';
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          data: physical,
          label: "Physical",
          borderColor: "#3e95cd",
          fill: false
        },
        {
          data: emotional,
          label: "Emotional",
          borderColor: "#8e5ea2",
          fill: false
        },
        {
          data: intellectual,
          label: "Intellectual",
          borderColor: "#c3462e",
          fill: false
        },
        {
          data: physicalCompat,
          label: "Partner's Physical",
          borderColor: "#8ac63f",
          fill: false
        },
        {
          data: emotionalCompat,
          label: "Partner's Emotional",
          borderColor: "#ee2a7b",
          fill: false
        },
        {
          data: intellectualCompat,
          label: "Partner's Intellectual",
          borderColor: "#f7941d",
          fill: false
        }
      ]
    },
  
      options: {
      scales: {
        yAxes: [{
          ticks: {
            min: -1,
            max: 1
            },
            gridLines: {
                color: '#6d6e71',
                zeroLineColor: '#c9ad54'
          }
              }],
              xAxes: [{
                  gridLines: {
                      color: '#6d6e71'
              }
          }]  
      }
    }
  });

})