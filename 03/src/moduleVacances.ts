export function calculerJoursRestants(deja: number) {
  var wholeWeek = Math.floor(deja/7);
  var daysLeft = deja%7;
  var dejaVacances;
  if (daysLeft <= 5){
      dejaVacances =  wholeWeek*2;
  }
  else {
      dejaVacances = wholeWeek*2 + 7 - daysLeft;
  }
  return 52*2 - dejaVacances;
}