// var num1=12;
// var num2=24;
// var factor=0;
// for(let i=1;i<num2;i++){   //i=12 ,13,13<=24
//     if((num1%i==0) && (num2%i==0)){  // 13%12==0, 13%13==0 ,  24%13==0
//         factor=i  //12
//         console.log(factor);
         
//     }
// }
// console.log("HCF",factor);

// var limit=0;
// console.log(num1>num2?limit=num1:limit=num2);

// count
// var num1=60;
// var num2=72;
// var limit=0;
// let factor=0;
// if(num1>num2){
//     limit=num2;
// }
// else{
//     limit=num1
// }
// let count=1;
// for(let i=1;i<limit;i++){
//     if((num1%i==0)&& (num2%i==0)){
//         factor=i;
//         console.log(factor);
//     }
//     count++;
// }
//     console.log("hcf",factor);
//     console.log("count",count);

// using while loop
var num1=100;
var num2=111;
var factor=0;
var i=1;
while(i<num1){
    if((num1%i==0)&& (num2%i==0)){
        factor=i;
    }
    i++;
    }
    console.log(factor);
