// var num=123;
// var res="";
// while(num!=0){ //123!=0  12!=0 1!=0
// let last_digit=num%10; // last_digit=3 1%10=1  last_digit= 12%10=2
// res+=last_digit; //  ""+"3"+"2"+"1"
// num=math.floor(num/10)  //123/10=12.3 math.floor(12.3)=12 num=12   12/10=1.2 math.floor(1.2)=1 num=1 1/10=0.1=0
// }
// console.log(res);





var num=123, sum=0;
while (num!=0) {
    let digit=num%10;
    sum+=digit**3
    num=Math.floor(num/10)
}
console.log(num);