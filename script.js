let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function setOperator(op) {
  if (currentInput === '') return;
  if (firstOperand === '') {
    firstOperand = currentInput;
  } else {
    calculateResult();
  }
  operator = op;
  currentInput = '';
}

function calculateResult() {
  if (firstOperand === '' || currentInput === '') return;
  let result;
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(currentInput);
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }
  display.value = result;
  firstOperand = result.toString();
  currentInput = '';
}

function clearDisplay() {
  display.value = '';
  currentInput = '';
  operator = '';
  firstOperand = '';
}
