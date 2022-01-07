// id ,district ,positive cases,death rate,cured,frst dose,scnd dose
	var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district
// var positive=coivd_data.reduce((cd1,cd2)=>cd1[2]>cd2[2]?cd1:cd2)
// console.log(positive);

// q2 district with higest 1 dose vaccination rate
// var dist=coivd_data.reduce((cd1,cd2)=>cd1[5]>cd2[5]?cd1:cd2)[5]
// console.log(dist);

// q3 district with lowest death cases
// var lowdeath=coivd_data.reduce((cd1,cd2)=>cd1[3]<cd2[3]?cd1:cd2)[1]
// console.log(lowdeath);

// q4 sort district with +ve cases
// var positive=covid_data.sort((cd1,cd2)=>cd2[2]-cd1[2])
// console.log(positive);

// q5 sort the districts based on 1st dose
// var dist=covid_data.sort((cd1,cd2)=>cd2[5]-cd1[5])
// console.log(dist);

// q6 is there any states with +ve cases > 60000
// var isavail=coivd_data.some(cd=>cd[2]>60000)
// console.log(isavail);

// q7 print trissur details
// var trissur=covid_data.filter(cd=>cd[1]=="thrissur")
// console.log(trissur);

// q8 total number of +ve cases
// var total=covid_data.map(cd=>cd[2])
// var sum=total.reduce((cd1,cd2)=>cd1+cd2)
// console.log(sum);

// q9 total number of cured cases
// var cured=covid_data.map(cd=>cd[4])
// var sum=cured.reduce((cd1,cd2)=>cd1+cd2)
// console.log(sum);

// q10 cured numbers of iduky
// var iduky=covid_data.find(cd=>cd[1]=="iduky")[4]
// console.log(iduky);

// q11 total number of death cases
// var death=covid_data.map(cd=>cd[3])
// var sum=death.reduce((cd1,cd2)=>cd1+cd2)
// console.log(sum);

// another method
// var death=covid_data.map(cd=>cd[3]).reduce((cd1,cd2)=>cd1+cd2)
// console.log(death);
