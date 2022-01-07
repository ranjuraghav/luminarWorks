// map
// filter
// reduce
// sort()
// some()
// find()
// forEach()


// map()
// -------------
// var arr=[2,3,4,5,6,7,8]
// var squares=arr.map(num=>num*2)
// console.log(squares);

// var add_two=arr.map(num=>num+2)
// console.log(add_two);

// var names=['ram','ravi','arun']
// var upp=names.map(names=>names.toUpperCase())
// console.log(upp);

// filter()
// --------------
// var arr=[2,3,4,5,6,7,8]
// print even numbers
// var evens=arr.filter(num=>num%2==0)
// console.log(evens);

// print names start with a/A
// var names=["anu","Abhi","manu","anil"]
// var aname=names.filter(names=>(names[0]=="a") || (names[0]=="A"))
// console.log(aname);

// reduce function
// -------------------
var arr=[2,3,4,5,6,7,8]
// find max using reduce
// var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max);
// find sum
var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(sum);