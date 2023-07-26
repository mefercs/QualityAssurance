function startTimer() {
  var inputTime = parseInt(document.getElementById("time").value, 10);

  if (isNaN(inputTime) || inputTime < 1) {
    alert("Please enter a valid positive number.");
    return;
  }

  var timerDisplay = document.getElementById("timerDisplay");
  timerDisplay.innerHTML = "Time remaining: " + formatTime(inputTime);

  var timerInterval = setInterval(function() {
    inputTime--;

    if (inputTime < 0) {
      clearInterval(timerInterval);
      timerDisplay.innerHTML = "Time's up!";
    } else {
      timerDisplay.innerHTML = "Time remaining: " + formatTime(inputTime);
    }
  }, 1000);
}

function formatTime(seconds) {
  var mins = Math.floor(seconds / 60);
  var secs = seconds % 60;

  return mins.toString().padStart(2, "0") + ":" + secs.toString().padStart(2, "0");
}
