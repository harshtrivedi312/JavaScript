//arrow function in an Object

/*
will not need to write the word function instade use =>

let/const name = ()=>{}

Limitations
1. DO NOT have .this
2. NEW key in javaScript will not work
3. only works in es 6 of JavaScript

*/

let multiply = function(numOne ,numTwo){
    return  numOne * numTwo
}
console.log(multiply(4,5));

// => style fo writing function

const mul = (numOne,numTwo) => numOne * numTwo

console.log(mul(5,5));
