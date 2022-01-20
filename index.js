// set date and time
let time = document.getElementById("time");
let date = document.getElementById("date");
// set analog clock
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");

let timeUpdate = function () {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  seconds.style.transform = `rotate(${s * 6}deg)`;
  minutes.style.transform = `rotate(${m * 6}deg)`;
  hours.style.transform = `rotate(${h * 30}deg)`;
  return `${h}:${m}:${s}`;
};

setInterval(() => {
  time.textContent = timeUpdate();
}, 1000);
