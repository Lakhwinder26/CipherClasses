function dividesEvenly(a, b) {
    return a / b;
}


//Indivisible Value Example
var x = dividesEvenly(1000, 9)
console.log('value is ' + x);

if (x == x.toFixed(0)) {
    console.log('divisible');
} else {
    console.log('Not divisible');
}


//Divisible Value Example
var y = dividesEvenly(1000, 10)
console.log('value is ' + y);

if (y == y.toFixed(0)) {
    console.log('divisible');
} else {
    console.log('Not divisible');
}
