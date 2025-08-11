const display = document.getElementById("display");

const update = val => display.value += val;
const clearDisplay = () => display.value = '';
const backspace = () => display.value = display.value.slice(0, -1);
const calculate = () => {
  try { display.value = eval(display.value); }
  catch { display.value = 'Error'; }
};
const appendOperator = op => {
  const last = display.value.slice(-1);
  if ('+-*/'.includes(last)) display.value = display.value.slice(0, -1) + op;
  else update(op);
};
const calculatePercentage = () => display.value = eval(display.value) / 100;
const squareRoot = () => display.value = Math.sqrt(eval(display.value));
const square = () => display.value = Math.pow(eval(display.value), 2);
const reciprocal = () => {
  const val = eval(display.value);
  display.value = val === 0 ? 'Cannot ÷ 0' : 1 / val;
};
const appendNumber = n => update(n);
const appendDot = () => {
  if (!display.value.endsWith('.')) update('.');
};
