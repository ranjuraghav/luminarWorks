// first recursive character
var pattern="ABABBC"
var rc={}
// for(let char of pattern ){
//     if(char in rc){
// console.log("first recursive character is",char);
// break
//     }
// else {
//     rc[char]=1
// }
// } 
var op=[]
// pattern.split("").map(char=>char in rc?op.push(char):rc[char]=1)
// console.log(op[0]);


// to return array
// array.from()
Array.from(pattern).map(char=>char in rc?op.push(char):rc[char]=1)
console.log(op[0]);
