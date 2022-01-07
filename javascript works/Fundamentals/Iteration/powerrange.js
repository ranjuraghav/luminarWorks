// var num=5;
// var i=1;
// let res=""
// while (i<=num) {  //1<=2 2<=2 3<=2
//     res+=num      //""+2=res="2" "22"
//     console.log(res);  //2 22
//     i++;      //i=2 3
// }


var num=2;
var i=1;
let res="";
var sum=0;
while (i<=num) {
    res+=num
    console.log(res);
    sum=sum+Number(res)
i++;    
}
console.log(sum);