var hours = 0, minutes = 0, seconds = 0, interval;
var formEl = document.getElementById("form");
var hoursIn = document.getElementById("hours-in");
var minutesIn = document.getElementById("minutes-in");
var secondsIn = document.getElementById("seconds-in");
var hoursDisplay = document.getElementById("hours");
var minutesDisplay = document.getElementById("minutes");
var secondsDisplay = document.getElementById("seconds");
var startBtn = document.getElementById("start-btn");
var stopBtn = document.getElementById("stop-btn");
var setTextContent = function (el, txt) { return (el.textContent = txt); };
var setAllTextContents = function () {
    setTextContent(hoursDisplay, hours.toString());
    setTextContent(minutesDisplay, minutes.toString());
    setTextContent(secondsDisplay, seconds.toString());
};
setAllTextContents();
formEl.onsubmit = function (e) {
    e.preventDefault();
    if (!hoursIn.value)
        hoursIn.value = "0";
    if (!minutesIn.value)
        minutesIn.value = "0";
    if (!secondsIn.value)
        secondsIn.value = "0";
    hours = parseInt(hoursIn.value);
    minutes = parseInt(minutesIn.value);
    seconds = parseInt(secondsIn.value);
    setAllTextContents();
    hoursIn.value = "0";
    minutesIn.value = "0";
    secondsIn.value = "0";
    interval = setInterval(function () {
        if (hours === 0 && minutes === 0 && seconds === 0)
            clearInterval(interval);
        else if (seconds !== 0) {
            seconds--;
            setTextContent(secondsDisplay, seconds.toString());
        }
        else if (seconds === 0 && minutes > 0) {
            seconds = 60;
            minutes--;
            setTextContent(secondsDisplay, seconds.toString());
            setTextContent(minutesDisplay, minutes.toString());
        }
        else if (minutes === 0 && hours > 0) {
            minutes = 60;
            hours--;
            setTextContent(minutesDisplay, minutes.toString());
            setTextContent(hoursDisplay, hours.toString());
        }
    }, 1000);
    stopBtn.onclick = function () { return clearInterval(interval); };
};
