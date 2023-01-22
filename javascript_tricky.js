const number =undefined + 11;

console.log(number);
console.log(typeof number);

if(number === NaN){
    console.log("number is Not a Number");
}
else if(number === 11){
    console.log("number is 11");
}
else {
    console.log("others");
}