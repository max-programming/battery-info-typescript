// VARIABLES START
const progressBar = document.getElementById("progressBar");
const progress = document.getElementById("progress");
let batteryLevel, isCharging;
// VARIABLES END

// MAIN Function Start
async function showBattery() {
  try {
    const battery = await navigator.getBattery();
    batteryLevel = `${battery.level * 100}%`;
    isCharging = battery.charging;
    // Change Level
    console.log(battery);
    changeLevel(battery);
    changeChargingAnimation(battery.charging);
    changeDoneIn(battery.chargingTime, battery.dischargingTime);
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
