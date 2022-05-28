console.log("This is clock project");

function updateClock() {
  let currentTime = new Date();

  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();

  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  currentHours = currentHours > 12 ? currentHours - 12 : currentHours;
  currentHours = currentHours == 0 ? 12 : currentHours;

  let dayTime = currentHours < 12 ? "AM" : "PM";

  let string =
    currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + dayTime;

  document.getElementById(
    "time"
  ).innerHTML = `<h3 class="card-title text-center">${string}</h3>`;
}

function updateDate() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDay();
  let todayDate = currentDate.getDate();
  let month;
  let day;

  todayDate = (todayDate < 10 ? "0" : "") + todayDate;

  switch (currentMonth) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }

  let dateString = day + " " + month + " " + todayDate + " " + currentYear;

  document.getElementById(
    "date"
  ).innerHTML = `<h5 class="card-title text-center">${dateString}</h5>`;
}

window.onload = () => {
  updateDate();
  updateClock();
  setInterval(() => {
    updateClock();
    updateDate();
  }, 1000);
};
