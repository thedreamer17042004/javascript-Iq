// anylyzing
// the end:  1 + 2 = 3;


// show the number and operator in the input field
// click = so the answer will correctly be
// click delete so the delete all inside input field



const userInput =  document.querySelector("#screen");
var expression = "";

press = (num) => {
  expression += num;
  userInput.value = expression;
}

equal = () => {
  userInput.value = eval(expression);
  expression = "";
}

erase = () => {
  expression = "";
  userInput.value = expression;
}
