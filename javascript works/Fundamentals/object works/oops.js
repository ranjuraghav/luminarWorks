// class
// object
// reference



// prototype inheritance
var baleno={
    color:["red","white","blue"],
    varients:["petrol"],
    price:"8lakhs",
    manufacture:"nexa",
    getprice(){
        return this.price
    }

}
 var glanza={
     manufacture:"toyota",
     price:"9lakhs"
 }

 glanza.__proto__=baleno
 console.log(glanza.getprice());