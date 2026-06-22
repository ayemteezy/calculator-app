const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".submit");
const display = document.querySelector("input");

let firstNumber = "";
let secondNumber = "";
let result = "";
let operator = "";

// operation function
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Error" : a / b);
const remainder = (a, b) => (b === 0 ? "Error" : a % b);

// this function will handle all digits
function handleDigits(value) {
  if (operator === "") {
    // FIXME: when we have result thenclicking new number should clear the result
    if (value === "." && firstNumber.includes(".")) return;
    firstNumber += value;
    display.value = firstNumber;
  } else {
    if (value === "." && firstNumber.includes(".")) return;
    secondNumber += value;
    display.value += secondNumber;
  }
}

function handleOperators(value) {
  if (value === "C") {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    display.value = 0;
  }

  // FIXME: bug when we have result and clicked CE
  if (value === "CE") {
    if (operator === "") {
      firstNumber = firstNumber.slice(0, -1);

      display.value = firstNumber === "" ? 0 : firstNumber;
    } else {
      secondNumber = secondNumber.slice(0, -1);
      display.value = secondNumber === "" ? 0 : secondNumber;
    }
  }

  // this will return result first if user clicks another operator
  if (operator !== "") {
    operate(operator, firstNumber, secondNumber);
  }

  if (firstNumber !== "") {
    operator = value;
    display.value += operator;
  }
}

// this is a function to handle all buttons
function handler() {
  digitButtons.forEach((digitButton) => {
    digitButton.addEventListener("click", (e) => {
      const value = e.target.textContent;
      handleDigits(value);
    });
  });

  operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (e) => {
      const value = e.target.textContent;
      handleOperators(value);
    });
  });

  equalButton.addEventListener("click", (e) => {
    operate(operator, firstNumber, secondNumber);
  });
}

function operate(op, num1, num2) {
  // converts string to numbers
  num1 = Number(num1);
  num2 = Number(num2);

  switch (op) {
    case "+":
      result = add(num1, num2);
      break;
    case "−":
      result = subtract(num1, num2);
      break;
    case "X":
      result = multiply(num1, num2);
      break;
    case "÷":
      result = divide(num1, num2);
      break;
    case "√":
      result = Math.sqrt(num1);
      break;
    case "%":
      result = remainder(num1, num2);
      break;
    default:
      return null;
  }

  if (result % 1 !== 0) {
    result = Math.round(result * 100000) / 100000;
  }
  display.value = result;
  firstNumber = result;
  operator = "";
}

handler();
