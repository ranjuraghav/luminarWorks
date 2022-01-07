var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4g"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4g"],
    

]

// // costly mobile
// mobiles.sort((m1,m2)=>m2[3]-m1[3])
// // console.log(mobiles[0][1]);

// // snapdragon processor mobiles
// for(let mobile of mobiles){
//     if(mobile[4]=="snapdragon"){
//         // console.log(mobile);
//     }
// }

// // print costly mobile with processor snpdragon with 5g band
// var snap_5g=[]
// for(let mob of mobiles){
//     if(mob[4]=="snapdragon" && mob[6]=="5G" ){
// snap_5g.push(mob)
//     }
// }
// snap_5g.sort((m1,m2)=>[3]-m1[3])
// // console.log(snap_5g[0]);
// //  lowest price with processor snpdragon with 5g band
// // console.log(snap_5g[snap_5g.length-1]);

// // is there any mobile can i purchase below 10k
// // print samsungA51 mobile details
// var mob_details=[]
// for(let mob of mobiles){
//     if(mob[2]=="samsungA51"){
//         mob_details.push(mob)
//     }
// }



//  using map function
// ------------------------
// print mobile names
// var mob_names=mobiles.map(mob=>mob[2])
// console.log(mob_names);

// // list all mobile prices
// var mob_prices=mobiles.map(mob=>mob[3])
// console.log(mob_prices);

// num>5=num+1 num<5=num-1
// var nums=[2,3,5,6,7,8,9]
// output=1 2 4 7 8 9 10
// var op=nums.map(nums=>nums>5?nums+1:nums-1)
// console.log(op);

// filter function
//-------------------
// list samsung branded mobile details
// var mob_names=mobiles.filter(mob=>mob[1]=="samsung")
// console.log(mob_names);

// // list samsung branded mobile names
// var mob_names=mobiles.filter(mob=>mob[1]=="samsung").map(mob=>mob[2])
// console.log(mob_names);

// list all mobiles under 25000  only names and price
// var mob_prices=mobiles.filter(mob=>mob[3]<25000).map(mob=>[mob[2],mob[3]])
// console.log(mob_prices);

// print mobile details available in price range of 25k-30k
// var mob_range=mobiles.filter(mob=>(mob[3]>=25000)&&(mob[3]<=30000))
// console.log(mob_range);

// list all 5g mobile names
// var  mob_names=mobiles.filter(mob=>mob[6]=="5G").map(mob=>mob[2])
// console.log(mob_names);

// list all 5g mobiles available under 25000
// var mob_names=mobiles.filter(mob=>mob[6]=="5G").map(mob[3]<25000)
// console.log(mob_names);

// list all samsung mobile names whose band=4g and display type AMOLED
// var mob_names=mobiles.filter(mob=> mob[1]=="samsung" && mob[6]=="4g" && mob[5]=="AMOLED")
// console.log(mob_names);

// list  max price details
// var mob_price=mobiles.reduce((mob1,mob2)=>mob1[3]>mob2[3]?mob1:mob2)
// console.log(mob_price);

// list min price details
// var min=mobiles.reduce((mob1,mob2)=>mob1[3]<mob2[3]?mob1:mob2)
// console.log(min);

// var min=mobiles.reduceRight((mob1,mob2)=>mob1[3]<mob2[3]?mob1:mob2)
// console.log(min);

// Some function 
// -------------------
// is there any mobiles available bw 10000 &25000
// var isavail=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=25000)
// console.log(isavail);

// is there mobile available Rs10000
// var isavail=mobiles.some(mob=>mob[3]==10000)
// console.log(isavail);

// find function
// ----------------
// find mobiles with id=1000
// var namebyid=mobiles.find(mob=>mob[0]==1000)
// console.log(namebyid);

// find mobiles with brand redmi
var mob_name=mobiles.find(mob=>mob[1]=="redmi")
console.log(mob_name);
// if the condition have more than one output it only print first value.