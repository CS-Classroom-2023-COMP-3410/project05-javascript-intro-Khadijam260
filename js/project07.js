// Virtual Calculator JavaScript Implementation

// Variables to store values and operations
let currentInput = "";
let previousInput = "";
let operator = null;
let memory = 0;

// Get references to DOM elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Update the display
function updateDisplay(value) {
  display.textContent = value;
}

// Handle button clicks
function handleButtonClick(event) {
  const value = event.target.value;

  if (!isNaN(value) || value === ".") {
    handleNumber(value);
  } else if (["+", "-", "*", "/"].includes(value)) {
    handleOperator(value);
  } else if (value === "=") {
    calculateResult();
  } else if (value === "C") {
    clearCalculator();
  } else if (value === "√") {
    calculateSquareRoot();
  } else if (value === "%") {
    calculatePercentage();
  } else if (value === "M+") {
    addToMemory();
  } else if (value === "MR") {
    recallMemory();
  } else if (value === "MC") {
    clearMemory();
  }
}

// Handle numbers and decimals
function handleNumber(value) {
  if (currentInput.includes(".") && value === ".") return;
  currentInput += value;
  updateDisplay(currentInput);
}

// Handle operators
function handleOperator(value) {
  if (currentInput === "") return;
  if (previousInput && operator) {
    calculateResult();
  }
  operator = value;
  previousInput = currentInput;
  currentInput = "";
}

// Calculate the result
function calculateResult() {
  if (!previousInput || !currentInput || !operator) return;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 === 0 ? "Error" : num1 / num2;
      break;
  }

  currentInput = result.toString();
  previousInput = "";
  operator = null;
  updateDisplay(currentInput);
}

// Clear the calculator
function clearCalculator() {
  currentInput = "";
  previousInput = "";
  operator = null;
  updateDisplay("0");
}

// Calculate square root
function calculateSquareRoot() {
  if (!currentInput) return;
  const result = Math.sqrt(parseFloat(currentInput));
  currentInput = result.toString();
  updateDisplay(currentInput);
}

// Calculate percentage
function calculatePercentage() {
  if (!currentInput) return;
  const result = parseFloat(currentInput) / 100;
  currentInput = result.toString();
  updateDisplay(currentInput);
}

// Add to memory
function addToMemory() {
  if (!currentInput) return;
  memory += parseFloat(currentInput);
}

// Recall memory
function recallMemory() {
  currentInput = memory.toString();
  updateDisplay(currentInput);
}

// Clear memory
function clearMemory() {
  memory = 0;
}

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

// Initialize display
updateDisplay("0");

