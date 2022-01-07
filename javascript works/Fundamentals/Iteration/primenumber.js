// prgrm to find given num is prime or not
 var num=7;
//  2...6
var flag=0;
for(let i=2;i<num;i++){   //i=2,2<4  i=3,3<4  i=4,4<4
    if(num%i==0){   //7%2==0  7%3==0 7%4=0
        flag=1;
        break;
    }
}
// if(flag==0){
//     console.log("prime");
// }
// else{
//     console.log("not prime");
// }
console.log(flag==0?"prime":"not prime");