let ms = 0, s = 0, m = 0, h = 0;
let runner;
let stopwatch = document.getElementById('stopwatch');

makeItBlink = (flag) => {
  flag == true ? stopwatch.classList.add("blink") :
   stopwatch.classList.remove("blink");
}

addSec = () => {
  ms = 0;
  s++;
}

addMin = () => {
  s = 0;
  m++;
}

addHour = () => {
  m = 0;
  h++;
}

formatZero = (n) => {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

updateDisplay = (hour, min, sec, millisec) => {
  stopwatch.textContent = formatZero(hour) + ":" + formatZero(min) + ":" +
   formatZero(sec) + "." + formatZero(millisec);
}

timer = () => {
  ms++;
  ms == 100 ? addSec() : ms;
  s == 60 ? addMin() : s;
  m == 60 ? addHour() : m;
  updateDisplay(h, m, s, ms);
}

start = () => {
  makeItBlink(false);
  runner = setInterval(timer, 10);
}

stop = () => {
  clearInterval(runner);
  runner = false;
  makeItBlink(true);
}

clickIt = () => {
  ! runner ?
   start()  // Start
  : stop(); // Pause
}
