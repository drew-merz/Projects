const readline = require('readline-sync');

var firstNum = parseInt(readline.question("Enter your first number "))
var secondNum = parseInt(readline.question("Enter your second number "))
const op = [
    'add', 'sub', 'multi', 'div'
]
var operator = readline.keyInSelect(op, "Enter your operator ")
var result;
let selected = op [
    operator
]



function doMath(firstNum, secondNum) {
    if (selected === 'add') {
        return `Output: ${firstNum + secondNum}`;
    } else if (selected === 'sub') {
        return `Output: ${firstNum - secondNum}`;
    } else if (selected === 'multi') {
        return `Output: ${firstNum * secondNum}`;
    } else if (selected === 'div') {
        return `Output: ${firstNum / secondNum}`;
    }
}
console.log(doMath(Number(firstNum), Number(secondNum)))






        




