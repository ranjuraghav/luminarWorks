var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010]

]

// q6 print second highest salary
employees.sort((e1,e2)=>e2[2]-e1[2])
console.log(employees[1][2]);

//q7 minimum salary
console.log(employees[employees.length-1][2]);

// q8 number of employees
console.log(employees.length);

// q9 highest salary among developers
var developer_details=[]
for(let employee of employees){
    if(employee[3]=="developer"){
        developer_details.push(employee)
    }
}

// q10 print details of employees whose name start with A
for(let employee of employees){
    if(employee[1][0]=="A"|| employee[1][0]=="a"){
        console.log(employee);
    }
}

// q11 print details of employees who were working int period of 2010 to 2015
for(let emp of employees){
    if(emp[4]>2009 && emp[5]<2016){
        console.log(emp);
    }
}