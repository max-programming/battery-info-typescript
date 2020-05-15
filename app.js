// VARIABLES START
const progressBar = document.getElementById("progressBar");
// const timeSpan = document.getElementById("time");
let batteryLevel, isCharging, dischTime;
// const className = changeBatteryColor(battery.level * 100);
// VARIABLES END

// MAIN Function Start
async function showBattery() {
  try {
    const colors = ["success", "info", "warning", "danger"];
    const battery = await navigator.getBattery();
    // console.log(battery);
    batteryLevel = `${battery.level * 100}%`;
    isCharging = battery.charging;
    dischTime = battery.dischargingTime;
    // Change Level
    battery.addEventListener("levelchange", () => changeLevel(battery));
    // Animate when charging
    battery.addEventListener("chargingchange", () => changeChargingAnimation());
    changeLevel(battery);
  } catch (err) {
    console.log(err);
    const errMessage = document.querySelector(".unsupported");
    errMessage.style.display = "block";
    document.querySelector(".supported").style.display = "none";
  }
}
// MAIN Funtion End
showBattery();
setInterval(showBattery, 1000);
