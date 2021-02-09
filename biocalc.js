//require moment library for date calculations
var moment = require("moment");

let readdate = "17.01.1964"
let bdateFromForm = moment(readdate, "DD.MM.YYYY");

let phyPrt = phyCalc(bdateFromForm, 7, 74, 91, -28 );

//let emoPrt = emoCalc(bdateFromForm, 7);

//let intPrt = intCalc(bdateFromForm, 14);

console.log(`physical array: ${phyPrt}`);
// console.log(`emotional array: ${emoPrt}`);
// console.log(`intellectual array: ${intPrt}`);

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

  let physical = Math.sin((2 * Math.PI * totaldaysalive) / 23 ) * 100;
  let emotional = Math.sin((2 * Math.PI * totaldaysalive) / 28 ) * 100;
  let intellectual = Math.sin((2 * Math.PI * totaldaysalive) / 33 ) * 100;
  //(pPercent <= physical+1) && (ePercent <= emotional+1)&& (iPercent <= intellectual+1)
  if(true) {  

    for(let i = 0; i < daysToShow; i++) {
      physical = Math.sin((2 * Math.PI * totaldaysalive + i) / 23 ) * 100;
      emotional = Math.sin((2 * Math.PI * totaldaysalive + i) / 28 ) * 100;
      intellectual = Math.sin((2 * Math.PI * totaldaysalive + i) / 33 ) * 100;
      
      console.log(`Day${i} (${moment().add(i,'days').format("MM.DD.YYYY")}) - physical: ${physical.toFixed()} emotional: ${emotional.toFixed()} intellectual: ${intellectual.toFixed()} TDA : ${totaldaysalive + i}`)
      phy[i] = physical.toFixed();
      //console.log(`phy${i}:${phy[i]}`);
      emo[i] = emotional.toFixed();
      int[i] = intellectual.toFixed();  
      
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

  if((pPercent <= physical+1) && (ePercent <= emotional+1)&& (iPercent <= intellectual+1)) {  
    
    for(let i = 0; i < daysToShow; i++) {
      let physical = Math.sin((2 * Math.PI * totaldaysalive + i) / 23 ) * 100;
      let emotional = Math.sin((2 * Math.PI * totaldaysalive + i) / 28 ) * 100;
      let intellectual = Math.sin((2 * Math.PI * totaldaysalive + i) / 33 ) * 100;
      
      //console.log(`Day${i} (${moment().add(i,'days').format("MM.DD.YYYY")}) - physical: ${physical.toFixed()} emotional: ${emotional.toFixed()} intellectual: ${intellectual.toFixed()} TDA : ${totaldaysalive + i}`)
      phy[i] = physical.toFixed();
      //console.log(`phy${i}:${phy[i]}`);
      emo[i] = emotional.toFixed();
      int[i] = intellectual.toFixed();
      
      
      
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
    let physical = Math.sin((2 * Math.PI * totaldaysalive + i) / 23 ) * 100;
    let emotional = Math.sin((2 * Math.PI * totaldaysalive + i) / 28 ) * 100;
    let intellectual = Math.sin((2 * Math.PI * totaldaysalive + i) / 33 ) * 100;
     
    //console.log(`Day${i} (${moment().add(i,'days').format("MM.DD.YYYY")}) - physical: ${physical.toFixed()} emotional: ${emotional.toFixed()} intellectual: ${intellectual.toFixed()} TDA : ${totaldaysalive + i}`)
    phy[i] = physical.toFixed();
    //console.log(`phy${i}:${phy[i]}`);
    emo[i] = emotional.toFixed();
    int[i] = intellectual.toFixed();
    
    
    
  }
  return int;

}

module.exports = biocalc;



    