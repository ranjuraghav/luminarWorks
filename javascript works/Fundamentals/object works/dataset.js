
var dataset=[
   
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},


]


var weather_data={}   //{palakkad:30}
for(let data of dataset){ //    {district:"palakkad",temparature:30}
    let distname=data.district   //plkd
    let curtemp=data.temparature   //30
    
    if(distname in weather_data){
        let oldtemp=weather_data[distname]
        if(curtemp>oldtemp){
            weather_data[distname]=curtemp
        }
    }else{
        weather_data[distname]=curtemp
    }
}
console.log(weather_data);