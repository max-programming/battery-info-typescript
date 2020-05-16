// VARIABLES START
const progressBar = document.getElementById("progressBar");
// const timeSpan = document.getElementById("time");
let batteryLevel, isCharging, dischTime;
// const className = changeBatteryColor(battery.level * 100);
// VARIABLES END

// MAIN Function Start
async function showBattery() {
  try {
    // debugger;
    const battery = await navigator.getBattery();
    // console.log(battery);
    batteryLevel = `${battery.level * 100}%`;
    isCharging = battery.charging;
    dischTime = battery.dischargingTime;
    // Change Level
    // battery.addEventListener("levelchange", () => changeLevel(battery));
    console.log(battery);
    changeLevel(battery);
    changeChargingAnimation(battery.charging);
  } catch (err) {
    console.log(err);
  }
}
// MAIN Funtion End
if ("getBattery" in navigator) {
  console.log("yessss");
  showBattery();
  setInterval(showBattery, 1000);
} else {
  console.log("Your browser does not support this app.");
  const errMessage = document.querySelector(".unsupported");
  errMessage.style.display = "block";
  document.querySelector(".supported").style.display = "none";
}
