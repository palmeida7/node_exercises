// let num1 = process.argv[2]; //will add these as strings since not established as numbers 
// let num2 = process.argv[3];

//Below is output on ubuntu terminal
// petey8ea@PJ:~/node$ node add_numbers.js 1 2
// 12
// petey8ea@PJ:~/node$ node add_numbers.js 1 2
// 3

let num1 = +process.argv[2]; //plus sign adds as numbers/integers 
let num2 = +process.argv[3];

console.log(num1 + num2);