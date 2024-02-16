let ms = 0, s = 0, m = 0, h = 0;
let runner;
let stopwatch = document.getElementById('stopwatch');
const reloadButton = document.getElementById('reload');

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

reload = () => {
  runner ?
   (clearInterval(runner), runner = false)
  : makeItBlink(false);
  ms = 0, s = 0, m = 0, h = 0;
  updateDisplay(h, m, s, ms);
}

window.addEventListener('keydown', (pressed) => {
  if (pressed.code == 'Escape' || pressed.code == 'Backspace') reload();
});

window.addEventListener('keypress', (pressed) => { // Detects only some keys
  if (pressed.code != 'Space' && pressed.code != 'Enter')
   if (!pressed.repeat) // Prevent holding a key and breaking it
    (pressed.key == 'r' || pressed.key == 'R') ? reload() : clickIt()
});
