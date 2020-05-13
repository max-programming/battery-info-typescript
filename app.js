// VARIABLES START
const progressBar = document.getElementById("progressBar");
// const timeSpan = document.getElementById("time");
let batteryLevel, isCharging, dischTime;
// VARIABLES END

// MAIN Function Start
async function showBattery() {
  try {
    const battery = await navigator.getBattery();
    // console.log(battery);
    batteryLevel = `${battery.level * 100}%`;
    isCharging = battery.charging;
    dischTime = battery.dischargingTime;
    // Change Level
    battery.addEventListener("levelchange", () => changeLevel(battery));
    // Animate when charging
    battery.addEventListener("chargingchange", () => changeChargingAnimation());
    // Change Discharging Time
    // battery.addEventListener("dischargingtimechange", () =>
    //   showDischargingTime(dischTime)
    // );
    progressBar.setAttribute("aria-valuenow", battery.level);
    progressBar.style.width = batteryLevel;
    progressBar.innerText = batteryLevel;
    // Change Level
    changeLevel(battery);
    // Change Battery color
    progressBar.classList.add(changeBatteryColor(battery.level * 100));
    // Change Discharging Time
    // showDischargingTime(dischTime);
    // console.log(isCharging);
    // Display text "Charging..."
    chargingTextDisplay(isCharging);
    // Charging Animation
    changeChargingAnimation();
  } catch (err) {
    const errMessage = document.querySelector(".unsupported");
    errMessage.style.display = "block";
    document.querySelector(".supported").style.display = "none";
  }
}
// MAIN Funtion End
showBattery();
setInterval(showBattery, 1000);
