var num=2;
var low=8,upp=30;
// 1**2=1
// 2**2=4
// 3**2=9   3
// 4**2=16  4
// 5**2=25  5
// 6**2=36

for(let i=1;i<=upp;i++){
    let res=i**num;
    if((res>=low)&& (res<=upp)){
        console.log(i);
    }
    
}