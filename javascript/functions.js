// FUNCTIONS Start
// Change Battery color function
let oldClassName;
function changeBatteryColor(value) {
  let className;
  if (value >= 75 && value <= 100) className = "bg-success";
  else if (value >= 50 && value <= 75) className = "bg-info";
  else if (value >= 25 && value <= 50) className = "bg-warning";
  else if (value >= 0 && value <= 25) className = "bg-danger";
  oldClassName = className;
  return className;
}

// Change Level function
function changeLevel(battery) {
  batteryLevel = `${battery.level * 100}%`;
  // Change Battery color
  if (oldClassName) {
    progressBar.classList.remove(oldClassName); // removing the prev classname
  }
  progressBar.classList.add(changeBatteryColor(battery.level * 100));
  progressBar.style.width = batteryLevel;
  progress.innerText = batteryLevel;

  // Change the emoji
  changeEmoji(battery.level * 100);
}

// Animate when charging function
const changeChargingAnimation = (isCharging) => {
  if (isCharging) {
    progressBar.classList.add("progress-bar-animated"); // Display text "Charging..."
  } else {
    progressBar.classList.remove("progress-bar-animated"); // Display text "Charging..."
  }
  chargingTextDisplay(isCharging);
};

const chargingTextDisplay = (isCharging) => {
  if (isCharging)
    document.getElementById("chargingText").classList.remove("d-none");
  else document.getElementById("chargingText").classList.add("d-none");
};

const changeEmoji = (value) => {
  const emojiImage = document.getElementById("emoji");
  if (value >= 75 && value <= 100) emojiImage.src = "./img/emojis/green.png";
  else if (value >= 50 && value <= 75) emojiImage.src = "./img/emojis/blue.png";
  else if (value >= 25 && value <= 50)
    emojiImage.src = "./img/emojis/yellow.png";
  else if (value >= 0 && value <= 25) emojiImage.src = "./img/emojis/red.png";
};

const changeDoneIn = (ch, disch) => {
  const doneIn = document.getElementById("doneIn");
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
// FUNCTIONS End
