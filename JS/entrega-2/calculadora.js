'use strict';

let firstNumber = +prompt('introduce un numero');
let operation = prompt('introduce operacion');
let secondNumber = +prompt('introduce un numero');

if (operation === '+') {
  console.log(firstNumber + secondNumber);
} else if (operation === '-') {
  console.log(firstNumber - secondNumber);
} else if (operation === '*') {
  console.log(firstNumber * secondNumber);
} else if (operation === '/') {
  console.log(firstNumber / secondNumber);
} else if (operation === '**') {
  console.log(firstNumber ** secondNumber);
} else {
  console.log('operacion no correcta');
}
