//declaring Variables
var networkType = document.getElementById("networkType");
var touchPoints = document.getElementById("touchPoints");
var network = document.getElementById("network");

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
