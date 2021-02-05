//  labels along the x-axis
var years = ['Today', '10 days', '20 days', '30 days', '40 days', '50 days', '60 days'];

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