//  labels along the x-axis
//const biocalc =require("./biocalc");
//var moment = require("moment");


let readdate = "10.12.1992"
let bdateFromForm = moment(readdate, "DD.MM.YYYY");

//let phyPrt = phyCalc(bdateFromForm, 7, 74, 91, -28 );

var years = ['Today', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'];  

// let readdate = "17.01.1964"
// let bdateFromForm = moment(readdate, "DD.MM.YYYY");

// For drawing the lines
var physical  = phyCalc(bdateFromForm, 30, 74, 91, -28 );
console.log(`Physical: ${physical}`);
//[0.24, 0.17, -0.55, 0.84, -0.98, 0.98, 0.71];
var emotional = emoCalc(bdateFromForm, 30, 74, 91, -28 );
console.log(`Emotional: ${emotional}`);
//[0.97, -0.38, -0.49, 0.98, -0.73, -0.08, 0.84];
var intellectual = intCalc(bdateFromForm, 30, 74, 91, -28 );
console.log(`Intellectual: ${intellectual}`);
//[-0.44, -0.71, 0.90, 0.13, -0.98, 0.51, 0.63];


var ctx = document.getElementById("myChart");
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.animation.easing = "easeInOutSine";
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
  //moment().add(i,'days').format("MM.DD.YYYY")
  var years = ['Today', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'];  
  
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
            min: -100,
            max: 100
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

function phyCalc(bdate, daysToShow, pPercent, ePercent, iPercent) {
  
  let birthDate = moment(bdate, "DD.MM.YYYY");
  let todayDate = moment(moment(), "DD.MM.YYYY");
  
  let bday = moment(birthDate).format(" MM.DD.YYYY");
  let tday = moment(todayDate).format(" MM.DD.YYYY")
  
  let totaldaysalive = todayDate.diff(birthDate, 'days');

  console.log(`birthdate:${bday} todayDate:${tday} TDA:${totaldaysalive}`);
  
  let phy = [];
  let emo = [];
  let int = [];

  let physical = Math.sin((2 * Math.PI * totaldaysalive) / 23 ) ;
  let emotional = Math.sin((2 * Math.PI * totaldaysalive) / 28 );
  let intellectual = Math.sin((2 * Math.PI * totaldaysalive) / 33 ) ;

  //(pPercent <= physical+1) && (ePercent <= emotional+1)&& (iPercent <= intellectual+1)
  if(true) {  

    for(let i = 0; i < daysToShow; i++) {
      physical = Math.sin((2 * Math.PI * totaldaysalive + i) / 23 );
      emotional = Math.sin((2 * Math.PI * totaldaysalive + i) / 28 ) ;
      intellectual = Math.sin((2 * Math.PI * totaldaysalive + i) / 33 );
      
      console.log(`Day${i} (${moment().add(i,'days').format("MM.DD.YYYY")}) - physical: ${physical.toFixed()} emotional: ${emotional.toFixed()} intellectual: ${intellectual.toFixed()} TDA : ${totaldaysalive + i}`)
      phy[i] = physical.toFixed(2);
      //console.log(`phy${i}:${phy[i]}`);
      emo[i] = emotional.toFixed(2);
      int[i] = intellectual.toFixed(2);  
      
    }     
    return phy;

  } else {
    console.log(" bad biorhythm input") ;    
  }

}

function emoCalc(bdate, daysToShow, pPercent, ePercent, iPercent) {

  let birthDate = moment(bdate, "DD.MM.YYYY");
  let todayDate = moment(moment(), "DD.MM.YYYY");
  
  let bday = moment(birthDate).format(" MM.DD.YYYY");
  let tday = moment(todayDate).format(" MM.DD.YYYY")
  
  let totaldaysalive = todayDate.diff(birthDate, 'days');

  //console.log(`birthdate:${bday} todayDate:${tday} TDA:${totaldaysalive}`);
  
  let phy = [];
  let emo = [];
  let int = [];

  if(true) {  
    //(pPercent <= physical+1) && (ePercent <= emotional+1)&& (iPercent <= intellectual+1)
    for(let i = 0; i < daysToShow; i++) {
      let physical = Math.sin((2 * Math.PI * totaldaysalive + i) / 23 ) ;
      let emotional = Math.sin((2 * Math.PI * totaldaysalive + i) / 28 ) ;
      let intellectual = Math.sin((2 * Math.PI * totaldaysalive + i) / 33 ) ;
      
      //console.log(`Day${i} (${moment().add(i,'days').format("MM.DD.YYYY")}) - physical: ${physical.toFixed()} emotional: ${emotional.toFixed()} intellectual: ${intellectual.toFixed()} TDA : ${totaldaysalive + i}`)
      phy[i] = physical.toFixed(2);
      //console.log(`phy${i}:${phy[i]}`);
      emo[i] = emotional.toFixed(2);
      int[i] = intellectual.toFixed(2);
      
      
      
    }
    return emo;

  } else {
    console.log(" bad biorhythm input") ;    
  }

}

function intCalc(bdate,daysToShow, pPercent, ePercent, iPercent) {

  let birthDate = moment(bdate, "DD.MM.YYYY");
  let todayDate = moment(moment(), "DD.MM.YYYY");
  
  let bday = moment(birthDate).format(" MM.DD.YYYY");
  let tday = moment(todayDate).format(" MM.DD.YYYY")
  
  let totaldaysalive = todayDate.diff(birthDate, 'days');

  //console.log(`birthdate:${bday} todayDate:${tday} TDA:${totaldaysalive}`);
  
  let phy = [];
  let emo = [];
  let int = [];

  for(let i = 0; i < daysToShow; i++) {
    let physical = Math.sin((2 * Math.PI * totaldaysalive + i) / 23 ) ;
    let emotional = Math.sin((2 * Math.PI * totaldaysalive + i) / 28 ) ;
    let intellectual = Math.sin((2 * Math.PI * totaldaysalive + i) / 33 ) ;
     
    //console.log(`Day${i} (${moment().add(i,'days').format("MM.DD.YYYY")}) - physical: ${physical.toFixed()} emotional: ${emotional.toFixed()} intellectual: ${intellectual.toFixed()} TDA : ${totaldaysalive + i}`)
    phy[i] = physical.toFixed(2);
    //console.log(`phy${i}:${phy[i]}`);
    emo[i] = emotional.toFixed(2);
    int[i] = intellectual.toFixed(2);
    
    
    
  }
  return int;

}