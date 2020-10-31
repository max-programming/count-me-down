let hours = 0,
  minutes = 0,
  seconds = 0,
  interval: number;
const formEl = document.getElementById("form") as HTMLFormElement;
const hoursIn = document.getElementById("hours-in") as HTMLInputElement;
const minutesIn = document.getElementById("minutes-in") as HTMLInputElement;
const secondsIn = document.getElementById("seconds-in") as HTMLInputElement;
const hoursDisplay = document.getElementById("hours") as HTMLHeadingElement;
const minutesDisplay = document.getElementById("minutes") as HTMLHeadingElement;
const secondsDisplay = document.getElementById("seconds") as HTMLHeadingElement;
const startBtn = document.getElementById("start-btn") as HTMLButtonElement;
const stopBtn = document.getElementById("stop-btn") as HTMLButtonElement;
const setTextContent = (el: HTMLElement, txt: any) => (el.textContent = txt);
const setAllTextContents = () => {
  setTextContent(hoursDisplay, hours);
  setTextContent(minutesDisplay, minutes);
  setTextContent(secondsDisplay, seconds);
};

setAllTextContents();

formEl.onsubmit = (e) => {
  e.preventDefault();
  if (!hoursIn.value) hoursIn.value = "0";
  if (!minutesIn.value) minutesIn.value = "0";
  if (!secondsIn.value) secondsIn.value = "0";

  hours = parseInt(hoursIn.value);
  minutes = parseInt(minutesIn.value);
  seconds = parseInt(secondsIn.value);
  setAllTextContents();

  hoursIn.value = "0";
  minutesIn.value = "0";
  secondsIn.value = "0";

  interval = setInterval(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) clearInterval(interval);
    else if (seconds !== 0) {
      seconds--;
      setTextContent(secondsDisplay, seconds);
    } else if (seconds === 0 && minutes > 0) {
      seconds = 60;
      minutes--;
      setTextContent(secondsDisplay, seconds);
      setTextContent(minutesDisplay, minutes);
    } else if (minutes === 0 && hours > 0) {
      minutes = 60;
      hours--;
      setTextContent(minutesDisplay, minutes);
      setTextContent(hoursDisplay, hours);
    }
  }, 1000);
  stopBtn.onclick = () => clearInterval(interval);
};
