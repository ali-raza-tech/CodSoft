const buttons = document.querySelectorAll("button");
const calInput = document.getElementById("cal");
const buttonSound = new Audio("button-click.mp3");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playSound();
  });
});

function playSound() {
  buttonSound.currentTime = 0;
  buttonSound.play();
}

function Clear() {
  calInput.value = "";
  playSound();
}

function Solve(value) {
  calInput.value += value;
  playSound();
}

function Back() {
  const currentText = calInput.value;
  calInput.value = currentText.slice(0, -1);
  playSound();
}

function Result() {
  try {
    const result = eval(calInput.value);
    calInput.value = result;
    playSound();
  } catch (error) {
    calInput.value = "Error";
  }
}
