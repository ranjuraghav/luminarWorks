// method over riding


//classical inheritence

class parent{
bike(){
    console.log("passion pro");
}}

class child extends parent{            //extends is used to invoke properties from differnt object
    bike(){
        super.bike()                   //super is used to refer parent
        console.log("royal enfield");
    }
}
 var ch=new child()
 ch.bike()