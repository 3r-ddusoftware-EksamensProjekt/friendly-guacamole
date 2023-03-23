//"http://api.weatherapi.com/v1/forecast.json?key=0de091b05e714a72a3385754230603&q=Slagelse&days=1&aqi=no&alerts=no"
// sollys i dag

/**
 * hvad skal jeg lave?
 *
 * Finde ud af hvornår solen står op og går ned, og så finder antal timer på døgn
 *
 * finde ud af fra json fil:
 * hvonår solen står op og går ned, for at kunne tjekke timerne mellem der - gem værdi
 *
 * tjek timerne mellem solen står op og går, find procent skyer, samt vejr.
 *
 * for de timer hvor der er mere end 50% skyer, skal der blive taget en time fra solly i alt
 * tilføj i alt timer til database
 *
 * skrive forskellige promts, i forhold til mængde sollys.
 *
 * find mængde sollys for dagen før
 *
 */

const text = document.getElementById("text");
const icon = document.getElementById("icon");
const time = document.getElementById("time");
const isDay = document.getElementById("isDay");
const cloud = document.getElementById("cloud");
/* 
let currentText = current.condition.text;
let currentIcon = current.condition.icon;
let timeDay = forecast.forecastday.hour[2].time;
let dayIsDay = forecast.forecastday.hour[2].is_day;
let dayCloud = forecast.forecastday.hour[2].cloud; */

//let staticURL ="http://api.weatherapi.com/v1/forecast.json?key=0de091b05e714a72a3385754230603&q=Slagelse&days=1&aqi=no&alerts=no";

let staticURL = "../version 0.1/Postgres Quickstart/weather.json";

$.getJSON(staticURL, function (data) {
  console.log("hello");
  //console.log(data.current.condition);

  text.innerHTML = data.current.condition.text;
  icon.src = data.current.condition.icon;
  time.innerHTML = data.forecast.forecastday[0].hour[2].time;
  isDay.innerHTML = data.forecast.forecastday[0].hour[2].is_day;
  cloud.innerHTML = data.forecast.forecastday[0].hour[2].cloud;

  /* 
  text = data.currentText;
  icon = data.currentIcon;
  time = data.timeDay;
  isDay = data.dayIsDay;
  dayCloud = data.dayCloud; */
});
