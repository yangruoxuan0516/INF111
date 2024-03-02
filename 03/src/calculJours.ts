import * as moduleTravail from "./moduleTravail.js";
import * as moduleVacances from "./moduleVacances.js";

const currentDate = new Date();
// Get individual components of the date
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Note: Months are zero-indexed, so add 1
const day = currentDate.getDate();
// Calculate the number of days since the beginning of the year
const startOfYear = new Date(year, 0, 1);
const ajd = Math.floor((Number(currentDate) - Number(startOfYear)) / (1000 * 60 * 60 * 24));

function dejaVacances(ajd: number) {
    var wholeWeek = Math.floor(ajd/7);
    var daysLeft = ajd%7;
    if (daysLeft <= 5){
        return wholeWeek*2;
    }
    else {
        return wholeWeek*2 + 7 - daysLeft;
    }
  }
function dejaTravail(ajd: number) {
    var wholeWeek = Math.floor(ajd/7);
    var daysLeft = ajd%7;
    if (daysLeft <= 5){
        return wholeWeek*5 + daysLeft;
    }
    else {
        return (wholeWeek+1)*5;
    }
  }

const y: HTMLHeadingElement = document.createElement("h4");
y.textContent = `Il est ${day.toString()}/${month.toString()}/${year.toString()}`
document.body.appendChild(y);

const t: HTMLHeadingElement = document.createElement("h3");
t.textContent = ` Il y reste ${moduleTravail.calculerJoursRestants(dejaTravail(ajd)).toString()} jours de travail`;
document.body.appendChild(t);

const v: HTMLHeadingElement = document.createElement("h2");
v.textContent = ` et ${moduleVacances.calculerJoursRestants(dejaVacances(ajd)).toString()} jours de vacances dans cette année`;
document.body.appendChild(v);

const A: HTMLHeadingElement = document.createElement("h1");
A.textContent = ":0";
document.body.appendChild(A);