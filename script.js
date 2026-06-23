const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".submit");
const display = document.querySelector("input");

let firstNumber = "";
let secondNumber = "";
let lastInput = "";
let result = "";
let operator = "";
const op = ["+", "-", "*", "/", "%", "r"];
const allowedKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".", // Digits & decimals
  "+",
  "-",
  "*",
  "%",
  "√",
  "r",
  "/", // Raw keyboard operators
  "Enter",
  "=",
  "Backspace",
];

document.addEventListener("keydown", (e) => {
  let pressedKey = e.key;
  if (!allowedKeys.includes(pressedKey)) return;

  if (e.ctrlKey && pressedKey === "Backspace") {
    handleOperators("C");
    return;
  }

  if (pressedKey === "Backspace") {
    handleOperators("CE");
    return;
  }

  if (op.includes(pressedKey)) {
    let symbol = "";
    if (pressedKey === "r") {
      handleOperators("√");
      return;
    }
    if (pressedKey === "/") symbol = "÷";
    if (pressedKey === "*") symbol = "×";
    handleOperators(symbol ? symbol : pressedKey);
    return;
  }

  if (pressedKey === "=" || pressedKey === "Enter") {
    e.preventDefault();

    operate(operator, firstNumber, secondNumber);
    return;
  }

  if (!op.includes(pressedKey) && pressedKey !== "Enter")
    handleDigits(pressedKey);
});

// operation function
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Error" : a / b);
const remainder = (a, b) => (b === 0 ? "Error" : a % b);

// this function will handle all digits
function handleDigits(value) {
  // Only clear the calculator for a fresh equation if a result exists,
  // they typed a normal digit, AND no math operator is currently active!
  if (result !== "" && operator === "") {
    if (value === ".") {
      result = ""; // Let them add a decimal onto their previous answer
    } else {
      // Clear out memory lanes cleanly for a completely new number
      result = "";
      firstNumber = "";
      lastInput = "";
      display.value = "";
    }
  }

  if (operator === "") {
    // prevents multiple decimals
    if (value === "." && firstNumber.includes(".")) return;
    if (result !== "") {
      result = ""; // reset the calculation flag marker for clean secondary digit typing!
    }

    if (firstNumber === "" && value === "0") return;
    if (
      firstNumber.charAt(0) === "0" &&
      value === "0" &&
      firstNumber.charAt(1) !== "."
    )
      return;

    if (
      firstNumber.includes(".") &&
      firstNumber.endsWith("0") &&
      value === "0"
    ) {
      return;
    }

    firstNumber += value;

    if (firstNumber.charAt(0) === ".") {
      firstNumber = "0.";
    }

    display.value = firstNumber;
  } else {
    if (value === "." && secondNumber.includes(".")) return;
    if (
      secondNumber.charAt(0) === "0" &&
      value === "0" &&
      secondNumber.charAt(1) !== "."
    )
      return;

    if (
      secondNumber.includes(".") &&
      secondNumber.endsWith("0") &&
      value === "0"
    ) {
      return;
    }

    if (value === "." && secondNumber === "") {
      secondNumber = "0.";
      display.value += "0.";
    } else {
      secondNumber += value;
      display.value += value;
    }
  }
}

function handleOperators(value) {
  if (value === "C") {
    firstNumber = "";
    secondNumber = "";
    lastInput = "";
    operator = "";
    result = "";
    display.value = 0;

    return;
  }

  if (value === "CE") {
    if (operator === "") {
      firstNumber = firstNumber.slice(0, -1);

      display.value = firstNumber === "" ? 0 : firstNumber;
      return;
    } else if (secondNumber !== "") {
      secondNumber = secondNumber.slice(0, -1);

      // Rebuild the whole screen display using template literals
      display.value = `${firstNumber}${operator}${secondNumber}`;
      return;
    } else if (secondNumber === "" && operator !== "") {
      operator = "";
      display.value = firstNumber;
    }
  }

  if (value === "√") {
    if (firstNumber !== "") {
      operator = "√";
      // pass "0" as the third argument so operate() guard clauses don't trip
      operate(operator, firstNumber, "0");
    }
    return;
  }

  if (operator !== "" && secondNumber !== "") {
    // this will return result first if user clicks another operator
    operate(operator, firstNumber, secondNumber);
  } else if (lastInput !== "") {
    // Stacking mode triggered! Reuse the last input value dynamically
    operate(operator, firstNumber, lastInput);
  }

  if (firstNumber !== "" && value !== "CE") {
    operator = value;
    // overwriting display so that it shows instantly if user change operator
    display.value = `${firstNumber}${operator}`;
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
  if (num1 === "" || op === "") return;

  // Only fallback to our memory tracker if num2 arrived completely empty
  if (num2 === "" && lastInput !== "") {
    num2 = lastInput;
  } else if (num2 !== "") {
    lastInput = num2; // Sync memory tracker to your active manual typing input buffer
  } else {
    return; // Stop early if there is no second number to use
  }

  // converts string to numbers
  num1 = Number(num1);
  num2 = Number(num2);

  switch (op) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
    case "−":
      result = subtract(num1, num2);
      break;
    case "×":
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

  result = result.toString();
  display.value = result;
  firstNumber = result;
  secondNumber = "";
}

handler();
