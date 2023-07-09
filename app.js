"use strict";
const num1Element = document.getElementById('num1'); //to resolve type inference as here we
const num2Element = document.getElementById('num2'); //wat to access value property but 
//value not every html has value property so it cant know which kind of element it is. it will return string
const buttonElement = document.querySelector('button'); //!is non-null assertion operator . here it will say that
// u r certain that buttonElement variable will nt be 'null' or 'undefined' regardless of its type
const numResults = [];
const textResults = [];
;
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2); // we add +num1 because value will always return string
    numResults.push(result);
    const stringResult = add(num1, num2);
    textResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
