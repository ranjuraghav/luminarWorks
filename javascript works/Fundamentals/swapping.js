var num1=10,num2=20;
console.log(`numbers before swapping num1=${num1} num2=${num2}`);
var temp;
temp=num1;
num1=num2;
num2=temp;
// second method
num1=num1+num2;
num2=num1-num2;
num1=num1-num2;
console.log(`numbers after swapping num1=${num1} num2=${num2}`);
