import { BatteryType } from "./types";

const progressBar = document.getElementById("progressBar") as HTMLDivElement;
let oldClassName: string;

const changeBatteryColor = (value: number) => {
  let className = "";
  if (value >= 75 && value <= 100) className = "bg-success";
  else if (value >= 50 && value <= 75) className = "bg-info";
  else if (value >= 25 && value <= 50) className = "bg-warning";
  else if (value >= 0 && value <= 25) className = "bg-danger";
  oldClassName = className;
  return className;
};

const changeEmoji = (value: number) => {
  const emojiImage = document.getElementById("emoji") as HTMLImageElement;
  if (value >= 75 && value <= 100) emojiImage.src = "./img/emojis/green.png";
  else if (value >= 50 && value <= 75) emojiImage.src = "./img/emojis/blue.png";
  else if (value >= 25 && value <= 50)
    emojiImage.src = "./img/emojis/yellow.png";
  else if (value >= 0 && value <= 25) emojiImage.src = "./img/emojis/red.png";
};

const displayChargingText = (isCharging: boolean) => {
  const chargingText = document.getElementById(
    "chargingText"
  ) as HTMLHeadingElement;
  if (isCharging) chargingText.classList.remove("d-none");
  else chargingText.classList.add("d-none");
};

const formatBatteryLevel = (batteryLevel: number): string => {
  const strBatteryLevel = String(batteryLevel * 100);
  if (strBatteryLevel[strBatteryLevel.length - 1] === "0")
    return strBatteryLevel + "%";
  else return String((batteryLevel * 100).toFixed(1)) + "%";
};

// Change Level function
export function changeLevel(battery: BatteryType): string {
  const progress = document.getElementById("progress") as HTMLParagraphElement;
  const batteryLevel = formatBatteryLevel(battery.level);

  // Change Battery color
  if (oldClassName) progressBar.classList.remove(oldClassName); // removing the prev classname
  progressBar.classList.add(changeBatteryColor(battery.level * 100));
  progressBar.style.width = batteryLevel;
  progress.innerText = batteryLevel;

  // Change the emoji
  changeEmoji(battery.level * 100);
  return batteryLevel;
}

// Animate when charging function
export const changeChargingAnimation = (isCharging: boolean) => {
  if (isCharging) {
    progressBar.classList.add("progress-bar-animated"); // Display text "Charging..."
  } else {
    progressBar.classList.remove("progress-bar-animated"); // Display text "Charging..."
  }
  displayChargingText(isCharging);
};

export const changeDoneIn = (ch: number, disch: number) => {
  const doneIn = document.getElementById("doneIn") as HTMLHeadingElement;
  if (ch !== Infinity) {
    doneIn.innerText = `Your battery will be fully charged in ${
      (ch / 60) | 0
    } mins`;
  } else if (disch !== Infinity) {
    doneIn.innerText = `Your battery will be dead in ${(disch / 60) | 0} mins`;
  } else {
    doneIn.innerText = "";
  }
};
