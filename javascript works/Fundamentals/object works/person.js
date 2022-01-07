// create employee object with properties eid,ename,salary,desig

var employee={
    eid:1000,
    ename:"Tom",
    salary:25000,
    desig:"developer",
       exp:2
}
// console.log(employee.desig);

// adding new key:value pair with experiance 2 years
// employee.experiance=2
// console.log(employee);

// to check gender key in employee
// console.log("gender" in employee); //   it return true / false

if ("exp" in employee){
    employee.exp+=1
}
else{
    employee.exp=1;
}
console.log(employee);