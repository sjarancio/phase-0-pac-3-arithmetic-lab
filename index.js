function add(a, b){
    return a + b
}

add(1, 4)

function subtract(a, b){
    return a - b
}

subtract(9, 5)

function multiply(a, b){
    return a * b
}

multiply(2, 5)

function divide(a, b){
    return a / b
}

divide(9, 3)



var n = 0;

function increment(n){

  n++;
  return n;
}

n=increment(n);

var i = 0;

function decrement(n){

  n--;
  return n;
}

i=decrement(i);

function makeInt(n) {
    return parseInt(n,10);
}

function preserveDecimal(n) {
    return parseFloat(n,10);
}