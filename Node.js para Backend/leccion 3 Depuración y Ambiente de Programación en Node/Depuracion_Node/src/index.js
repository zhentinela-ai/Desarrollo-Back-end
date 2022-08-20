/*
var a = 1;

// var a = 2; //menos restrictivo
// let a = 2; // mas restrictivo, por ende: error
a = 2; 

console.log('a: ' + a);

const b = 3;
console.log('b: ' + b);
b = 4; // error, is const and cannot be reassigned 
*/

let a = 1; 

a++

function sumar(a, b) {
    return a + b;
}

a += sumar(a, 5);

console.log(`El valor de la variable a es: ${a}`);