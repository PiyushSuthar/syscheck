//declaring Variables
var networkType = document.getElementById("networkType");
var touchPoints = document.getElementById("touchPoints");
var network = document.getElementById("network");
var ChargingLevel = document.getElementById("chargingIndicator");
var charging = document.getElementById("charging");

//Getting Information from System

// # Getting Network Type
networkType.innerText = navigator.connection.effectiveType.toUpperCase();

// # Getting Max TouchPoints of the screen
touchPoints.innerText = navigator.maxTouchPoints;

// # Getting if the device is online or not
// Function to check this every 2 seconds
setInterval(() => {
  if (navigator.onLine) {
    network.innerText = "Online";
  } else {
    network.innerText = "Offline";
  }
}, 2000);

// # Getting if the device is chargin and It's percentage
navigator.getBattery().then(function (battery) {
  battery.addEventListener("levelchange", function () {
    updateLevelInfo();
  });
  updateLevelInfo();
  function updateLevelInfo() {
    var level = battery.level * 100 + "%";
    ChargingLevel.style.width = level;
    ChargingLevel.innerText = level;
  }
  if (battery.charging) {
    charging.innerText = "Charging";
  } else {
    charging.innerText = "Not Charging";
  }
});

const parsedUrl = new URL(window.location);
const url = parsedUrl.searchParams.get("url");
const NativeShareEl = document.getElementById("nativeShareData");

if (url) {
  let parsedName = "",
    parsedParamUrl = "",
    parsedText = "";

  parsedName = parsedUrl.searchParams.get("name");
  parsedParamUrl = parsedUrl.searchParams.get("url");
  parsedText = parsedUrl.searchParams.get("text");

  NativeShareEl.innerHTML = `<div>
    <div>name: ${parsedName}</div>
    <div>text: ${parsedText}</div>
    <div>url: ${parsedParamUrl}</div>
  </div>`;
}
