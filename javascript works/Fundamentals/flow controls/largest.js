// Ternary Case:

var num1=30,num2=45;
var largest_num=num1>num2?num1:num2
console.log(largest_num);

// Normal Case:

var num1=25,num2=20;
if(num1>num2){
    console.log(`largest=${num1}`);
}
else{
    console.log(`largest=${num2}`);
}

//>=< condition:

var num1=10,num2=10;
if(num1>num2){
    console.log(`largest ${num1}`);
}
else if(num2>num1){
    console.log(`largest ${num2}`);
}
else{
    console.log("both are equal");
}

