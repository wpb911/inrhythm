//  labels along the x-axis

$(document).ready(function(){

  $.get("/api/user_data").then(function (data) {
    console.log(data);
    const {physical, emotional, intellectual } = data;
    // day = data.day;
    // month = data.month;
    // year = data.year;
    // console.log(day)
    // console.log(month)
    // console.log(year)
    // let readdate=day+ "." +month + "." + year;
    // // let readdate = "10.12.1992"
    // let bdateFromForm = moment(readdate, "DD.MM.YYYY");
    
    //let phyPrt = phyCalc(bdateFromForm, 7, 74, 91, -28 );
    
    //var years = ['Today', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 2', 'Day 3', 'Day 4'];
    
    var years = ['Today', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25', 'Day 26', 'Day 27', 'Day 28'];


    // let readdate = "17.01.1964"
    // let bdateFromForm = moment(readdate, "DD.MM.YYYY");
    
    // For drawing the lines
    // var physical = 
    //   ['-94', '-100', '-98', '-89', '-73', '-52',
    //   '-27',   '-0',  '27',  '52',  '73',  '89',
    //    '98',  '100',  '94',  '82',  '63',  '40',
    //    '14',  '-14', '-40', '-63', '-82', '-94',
    //  '-100',  '-98', '-89', '-73'];
      //phyCalc(bdateFromForm, 30, 74, 91, -28);
    console.log(`Physical: ${physical}`);
    //[0.24, 0.17, -0.55, 0.84, -0.98, 0.98, 0.71];
    // var emotional = 
    //   ['-43', '-62', '-78', '-90', '-97', '-100',
    //   '-97', '-90', '-78', '-62', '-43', '-22',
    //   '-0', '22', '43', '62', '78', '90',
    //   '97', '100', '97', '90', '78', '62',
    //   '43', '22', '-0', '-22'];
      //emoCalc(bdateFromForm, 30, 74, 91, -28);
    console.log(`Emotional: ${emotional}`);
    //[0.97, -0.38, -0.49, 0.98, -0.73, -0.08, 0.84];
    // var intellectual = 
    //   ['100', '99', '95', '87', '76', '62',
    //   '46', '28', '10', '-10', '-28', '-46',
    //   '-62', '-76', '-87', '-95', '-99', '-100',
    //   '-97', '-91', '-81', '-69', '-54', '-37',
    //   '-19', '0', '19', '37'];
      //intCalc(bdateFromForm, 30, 74, 91, -28);
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
            }]
          }
        }
      });
    
    })
    
    })
    
    // function phyCalc(bdate, daysToShow, pPercent, ePercent, iPercent) {
    
    //   let birthDate = moment(bdate, "DD.MM.YYYY");
    //   let todayDate = moment(moment(), "DD.MM.YYYY");
    
    //   let bday = moment(birthDate).format(" MM.DD.YYYY");
    //   let tday = moment(todayDate).format(" MM.DD.YYYY")
    
    //   let totaldaysalive = todayDate.diff(birthDate, 'days');
    
    //   console.log(`birthdate:${bday} todayDate:${tday} TDA:${totaldaysalive}`);
    
    //   let phy = [];
    //   let emo = [];
    //   let int = [];
    
    //   let physical = Math.sin((2 * Math.PI * totaldaysalive) / 23);
    //   let emotional = Math.sin((2 * Math.PI * totaldaysalive) / 28);
    //   let intellectual = Math.sin((2 * Math.PI * totaldaysalive) / 33);
    
    //   //(pPercent <= physical+1) && (ePercent <= emotional+1)&& (iPercent <= intellectual+1)
    //   if (true) {
    
    //     for (let i = 0; i < daysToShow; i++) {
    //       physical = Math.sin((2 * Math.PI * totaldaysalive + i) / 23);
    //       emotional = Math.sin((2 * Math.PI * totaldaysalive + i) / 28);
    //       intellectual = Math.sin((2 * Math.PI * totaldaysalive + i) / 33);
    
    //       console.log(`Day${i} (${moment().add(i, 'days').format("MM.DD.YYYY")}) - physical: ${physical.toFixed()} emotional: ${emotional.toFixed()} intellectual: ${intellectual.toFixed()} TDA : ${totaldaysalive + i}`)
    //       phy[i] = physical.toFixed(2);
    //       //console.log(`phy${i}:${phy[i]}`);
    //       emo[i] = emotional.toFixed(2);
    //       int[i] = intellectual.toFixed(2);
    
    //     }
    //     return phy;
    
    //   } else {
    //     console.log(" bad biorhythm input");
    //   }
    
    // }
    
    // function emoCalc(bdate, daysToShow, pPercent, ePercent, iPercent) {
    
    //   let birthDate = moment(bdate, "DD.MM.YYYY");
    //   let todayDate = moment(moment(), "DD.MM.YYYY");
    
    //   let bday = moment(birthDate).format(" MM.DD.YYYY");
    //   let tday = moment(todayDate).format(" MM.DD.YYYY")
    
    //   let totaldaysalive = todayDate.diff(birthDate, 'days');
    
    //   //console.log(`birthdate:${bday} todayDate:${tday} TDA:${totaldaysalive}`);
    
    //   let phy = [];
    //   let emo = [];
    //   let int = [];
    
    //   if (true) {
    //     //(pPercent <= physical+1) && (ePercent <= emotional+1)&& (iPercent <= intellectual+1)
    //     for (let i = 0; i < daysToShow; i++) {
    //       let physical = Math.sin((2 * Math.PI * totaldaysalive + i) / 23);
    //       let emotional = Math.sin((2 * Math.PI * totaldaysalive + i) / 28);
    //       let intellectual = Math.sin((2 * Math.PI * totaldaysalive + i) / 33);
    
    //       //console.log(`Day${i} (${moment().add(i,'days').format("MM.DD.YYYY")}) - physical: ${physical.toFixed()} emotional: ${emotional.toFixed()} intellectual: ${intellectual.toFixed()} TDA : ${totaldaysalive + i}`)
    //       phy[i] = physical.toFixed(2);
    //       //console.log(`phy${i}:${phy[i]}`);
    //       emo[i] = emotional.toFixed(2);
    //       int[i] = intellectual.toFixed(2);
    
    
    
    //     }
    //     return emo;
    
    //   } else {
    //     console.log(" bad biorhythm input");
    //   }
    
    // }
    
    // function intCalc(bdate, daysToShow, pPercent, ePercent, iPercent) {
    
    //   let birthDate = moment(bdate, "DD.MM.YYYY");
    //   let todayDate = moment(moment(), "DD.MM.YYYY");
    
    //   let bday = moment(birthDate).format(" MM.DD.YYYY");
    //   let tday = moment(todayDate).format(" MM.DD.YYYY")
    
    //   let totaldaysalive = todayDate.diff(birthDate, 'days');
    
    //   //console.log(`birthdate:${bday} todayDate:${tday} TDA:${totaldaysalive}`);
    
    //   let phy = [];
    //   let emo = [];
    //   let int = [];
    
    //   for (let i = 0; i < daysToShow; i++) {
    //     let physical = Math.sin((2 * Math.PI * totaldaysalive + i) / 23);
    //     let emotional = Math.sin((2 * Math.PI * totaldaysalive + i) / 28);
    //     let intellectual = Math.sin((2 * Math.PI * totaldaysalive + i) / 33);
    
    //     //console.log(`Day${i} (${moment().add(i,'days').format("MM.DD.YYYY")}) - physical: ${physical.toFixed()} emotional: ${emotional.toFixed()} intellectual: ${intellectual.toFixed()} TDA : ${totaldaysalive + i}`)
    //     phy[i] = physical.toFixed(2);
    //     //console.log(`phy${i}:${phy[i]}`);
    //     emo[i] = emotional.toFixed(2);
    //     int[i] = intellectual.toFixed(2);
    
    
    
    //   }
    //   return int;
    
    // }
  
  });






/*
3) on load
-- call out to get user data
-- then
-- -- 5) put user data on screen

*/


