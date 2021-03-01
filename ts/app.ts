import "regenerator-runtime/runtime";
import { BatteryType } from "./types";
import {
  changeLevel,
  changeChargingAnimation,
  changeDoneIn,
} from "./functions";

const navigatorObj: any = navigator;
let batteryLevel: string, isCharging: boolean;

// MAIN Function Start
async function showBattery() {
  try {
    const battery: BatteryType = await navigatorObj.getBattery();
    isCharging = battery.charging;
    // Change Level
    batteryLevel = changeLevel(battery);
    changeChargingAnimation(battery.charging);
    changeDoneIn(battery.chargingTime, battery.dischargingTime);
  } catch (err) {}
}
// MAIN Funtion End
if ("getBattery" in navigator) {
  showBattery();
  setInterval(showBattery, 1000);
} else {
  const unsupportedDiv = document.querySelector(
    ".unsupported"
  ) as HTMLHeadingElement;
  const supportedDiv = document.querySelector(".supported") as HTMLDivElement;
  unsupportedDiv.style.display = "block";
  supportedDiv.style.display = "none";
}
