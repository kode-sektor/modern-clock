// Selecting Elements
const body = document.querySelector("body"),
      hourHand = document.querySelector(".hand-hour"),
      minuteHand = document.querySelector(".hand-minute"),
      secondHand = document.querySelector(".hand-second"),
      modeSwitch = document.querySelector(".theme-toggle");

// Function to Update Clock Hands
const updateTime = () => {
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = ((date.getHours() + (date.getMinutes() / 60)) / 12) * 360;

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

// Run updateTime every second
setInterval(updateTime, 1000);
updateTime();
