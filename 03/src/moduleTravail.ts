export function calculerJoursRestants(deja: number) {
    var wholeWeek = Math.floor(deja/7);
    var daysLeft = deja%7;
    var dejaTravail;
    if (daysLeft <= 5){
        dejaTravail =  wholeWeek*5 + daysLeft;
    }
    else {
        dejaTravail = (wholeWeek+1)*5;
    }
    return 52*5 - dejaTravail;
  }