let secondHand = document.querySelector(".sec-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");

function setDate() {
  let now = new Date();
  let seconds = now.getSeconds();
  let secondsDegrees = (seconds / 60) * 360 + 90;

  let mins = now.getMinutes();
  let minsDegrees = (mins / 60) * 360 + 90;

  let hours = now.getHours();
  let hoursDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
