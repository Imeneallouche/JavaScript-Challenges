function setDate() {
  //set the variables needed

  const TodayDate = new Date();

  //let's first deal with the second hand
  const second = TodayDate.getSeconds();
  const secondDegrees = 90 + 6 * second;
  const secondHand = document.querySelector(".second-hand");
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  //let's move on now with the minute hand
  const minute = TodayDate.getMinutes();
  const minuteDegrees = 90 + 0.1 * (second + minute * 60);
  const minuteHand = document.querySelector(".min-hand");
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  //last but not least the hour hand
  const hour = TodayDate.getHours();
  const hourDegrees = 90 + (360 / 43200) * (second + minute * 60 + hour * 3600);
  const hourHand = document.querySelector(".hour-hand");
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
