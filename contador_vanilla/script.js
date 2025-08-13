const counterElement = document.querySelector("#counter");

const increaseButton = document.querySelector("#increase-button");
const decreaseButton = document.getElementById("decrease-button");
const resetButton = document.querySelector("#reset-button");

const decreaseTenButton = document.querySelector("#decrease-10-button");
const increaseTenButton = document.getElementById("increase-10-button");

let counterValue = 0;

increaseButton.addEventListener('click', function() {
  counterValue++;
  counterElement.textContent = counterValue;
});

decreaseButton.addEventListener('click', function() {
  counterValue--;
  // counterValue -= 1;
  counterElement.textContent = counterValue;
});

resetButton.addEventListener('click', function() {
  counterValue = 0;
  counterElement.textContent = counterValue;
});

decreaseTenButton.addEventListener('click', function() {
  counterValue -= 10;
  counterElement.textContent = counterValue;
});

increaseTenButton.addEventListener('click', () => {
  // counterValue = counterValue + 10;
  counterValue += 10;
  counterElement.textContent = counterValue;
});
