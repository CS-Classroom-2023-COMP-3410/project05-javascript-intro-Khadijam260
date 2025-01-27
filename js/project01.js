const clockElement = document.getElementById("digital-clock");
const toggleFormatButton = document.getElementById("toggle-format");
const colorPicker = document.getElementById("color-picker");
const fontSizeInput = document.getElementById("font-size");
const setAlarmButton = document.getElementById("set-alarm");
const alarmContainer = document.getElementById("alarm-container");
const alarmTimeInput = document.getElementById("alarm-time");
const saveAlarmButton = document.getElementById("save-alarm");
const alarmMessage = document.getElementById("alarm-message");

let is24HourFormat = false;
let alarmTime = null;

// Update clock every second
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (!is24HourFormat) {
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    clockElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${period}`;
  } else {
    clockElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  checkAlarm(hours, minutes, seconds);
}

function pad(number) {
  return number.toString().padStart(2, "0");
}

// Toggle time format
toggleFormatButton.addEventListener("click", () => {
  is24HourFormat = !is24HourFormat;
  toggleFormatButton.textContent = is24HourFormat
    ? "Switch to 12-Hour Format"
    : "Switch to 24-Hour Format";
  updateClock();
});

// Customize clock color
colorPicker.addEventListener("input", (event) => {
  clockElement.style.color = event.target.value;
  localStorage.setItem("clockColor", event.target.value);
});

// Customize clock font size
fontSizeInput.addEventListener("input", (event) => {
  const fontSize = event.target.value;
  if (fontSize) {
    clockElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem("fontSize", fontSize);
  }
});

// Alarm functionality
setAlarmButton.addEventListener("click", () => {
  alarmContainer.style.display = "block";
});

saveAlarmButton.addEventListener("click", () => {
  alarmTime = alarmTimeInput.value;
  if (alarmTime) {
    alarmMessage.textContent = `Alarm set for ${alarmTime}`;
    localStorage.setItem("alarmTime", alarmTime);
  }
});

function checkAlarm(hours, minutes, seconds) {
  if (!alarmTime) return;

  const [alarmHours, alarmMinutes] = alarmTime.split(":").map(Number);

  const isAlarmTriggered = is24HourFormat
    ? hours === alarmHours && minutes === alarmMinutes && seconds === 0
    : (hours % 12 || 12) === alarmHours && minutes === alarmMinutes && seconds === 0;

  if (isAlarmTriggered) {
    alarmMessage.textContent = "Alarm ringing!";
    alert("Alarm ringing!");
  }
}

// Load saved preferences
function loadPreferences() {
  const savedColor = localStorage.getItem("clockColor");
  const savedFontSize = localStorage.getItem("fontSize");
  const savedAlarmTime = localStorage.getItem("alarmTime");

  if (savedColor) {
    clockElement.style.color = savedColor;
    colorPicker.value = savedColor;
  }

  if (savedFontSize) {
    clockElement.style.fontSize = `${savedFontSize}px`;
    fontSizeInput.value = savedFontSize;
  }

  if (savedAlarmTime) {
    alarmTime = savedAlarmTime;
    alarmMessage.textContent = `Alarm set for ${alarmTime}`;
  }
}

loadPreferences();
setInterval(updateClock, 1000);
