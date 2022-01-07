var num=15;
// if num is / by 3 print fizz
// if num is / by 5 print buzz
// if num is / by 15 print fizzbuzz
// if(num%3==0){
// console.log("fizz");
// }
//  else if(num%5==0){
//     console.log("buzz");
// }
// else if(num%15==0){
//     console.log("fizzbuzz");
// }

var str=""; //str=""
if(num%3==0){ //15%3==0
    str+="fizz" //str="fizz"
}
if(num%5==0){ //15%5==0
    str+="buzz" //str="fizz"+"buzz"
}
console.log(str); //fizzbuzz