function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
let num1 = 0,
  num2 = 0,
  operator = "";
function operate(n1, n2, op) {
  switch (op) {
    case "+":
      return add(n1, n2);
      break;
    case "-":
      return subtract(n1, n2);
      break;
    case "*":
      return multiply(n1, n2);
      break;
    case "/":
      return divide(n1, n2);
      break;
    default:
      console.log("Invalid");
      break;
  }
}
let data = "";
const view = document.querySelector(".solution");
const numbers = document.querySelectorAll(".no");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    console.log(num1, num2, data, operator);
    // if (operator) {
    //   data += number.innerText;
    // }
    if (data.length < 8) {
      console.log(num1, num2, data, operator);
      data += number.innerText;
      view.innerText = data;
      if (operator) {
        console.log(num1, num2, data, operator);
        num2 = data;
      }
    }
    console.log(num1, num2, data, operator);
  });
});
const opp = document.querySelectorAll(".ops");
opp.forEach((op) => {
  op.addEventListener("click", () => {
    if (num2) {
      data = operate(parseFloat(num1), parseFloat(num2), operator);
      console.log(num1, num2, data, operator);
      view.innerText = data;
      num1 = data;
      data = "";
      operator = op.innerText;
    } else {
      if (num1 && data) {
        console.log(num1, num2, data, operator);
        num2 = data;
        operator = op.innerText;
      } else if (data && !num1) {
        console.log(num1, num2, data, operator);
        num1 = data;
        operator = op.innerText;
      }
      data = "";
      console.log(num1, num2, data, operator);
    }
    console.log(num1, num2, data, operator);
  });
});

console.log(num1, num2, data, operator);

const equalTo = document.querySelector(".eq");
equalTo.addEventListener("click", () => {
  if (num1 && num2) {
    data = operate(parseFloat(num1), parseFloat(num2), operator);
    view.innerText = data;
    num1 = data;
    data = "";
    operator = "";
  }
  console.log(num1, num2, data, operator);
});

const clearAll = document.querySelector(".ac");
clearAll.addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  data = "";
  operator = "";
  view.innerText = "00";
});
