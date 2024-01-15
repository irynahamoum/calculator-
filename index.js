const calculator = document.querySelector(".calc-grid");
const output = document.querySelector(".output");

const previousOperand = document.createElement("div");
const currentOperand = document.createElement("div");

output.append(previousOperand, currentOperand);

previousOperand.classList.add("previous-operand");
currentOperand.classList.add("current-operand");

const allClearBtn = document.createElement("button");
allClearBtn.textContent = "AC";
allClearBtn.classList.add("large-btn");
allClearBtn.setAttribute("data-all-clear", true);

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "DEL";
deleteBtn.setAttribute("data-delete", true);

const divisionBtn = document.createElement("button");
divisionBtn.textContent = ":";
divisionBtn.setAttribute("data-operation", true);

const oneBtn = document.createElement("button");
oneBtn.textContent = "1";
oneBtn.setAttribute("data-number", true);

const twoBtn = document.createElement("button");
twoBtn.textContent = "2";
twoBtn.setAttribute("data-number", true);

const threeBtn = document.createElement("button");
threeBtn.textContent = "3";
threeBtn.setAttribute("data-number", true);

const multiplicationBtn = document.createElement("button");
multiplicationBtn.textContent = "*";
multiplicationBtn.setAttribute("data-operation", true);

const fourBtn = document.createElement("button");
fourBtn.textContent = "4";
fourBtn.setAttribute("data-number", true);

const fiveBtn = document.createElement("button");
fiveBtn.textContent = "5";
fiveBtn.setAttribute("data-number", true);

const sixBtn = document.createElement("button");
sixBtn.textContent = "6";
sixBtn.setAttribute("data-number", true);

const additionBtn = document.createElement("button");
additionBtn.textContent = "+";
additionBtn.setAttribute("data-operation", true);

const sevenBtn = document.createElement("button");
sevenBtn.textContent = "7";
sevenBtn.setAttribute("data-number", true);

const eightBtn = document.createElement("button");
eightBtn.textContent = "8";
eightBtn.setAttribute("data-number", true);

const nineBtn = document.createElement("button");
nineBtn.textContent = "9";
nineBtn.setAttribute("data-number", true);

const subtractionBtn = document.createElement("button");
subtractionBtn.textContent = "-";
subtractionBtn.setAttribute("data-operation", true);

const punctumBtn = document.createElement("button");
punctumBtn.textContent = ".";
punctumBtn.setAttribute("data-number", true);

const zeroBtn = document.createElement("button");
zeroBtn.textContent = "0";
zeroBtn.setAttribute("data-number", true);

const sumBtn = document.createElement("button");
sumBtn.textContent = "=";
sumBtn.setAttribute("data-equals", true);
sumBtn.classList.add("large-btn");

calculator.append(
  allClearBtn,
  deleteBtn,
  divisionBtn,
  oneBtn,
  twoBtn,
  threeBtn,
  multiplicationBtn,
  fourBtn,
  fiveBtn,
  sixBtn,
  additionBtn,
  sevenBtn,
  eightBtn,
  nineBtn,
  subtractionBtn,
  punctumBtn,
  zeroBtn,
  sumBtn
);
