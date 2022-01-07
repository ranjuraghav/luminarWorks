var text="hello hai hello hai"   //[hello:2 hai:2]
// var words=text.split(" ")
// words=["hello" "hai" "hello" "hai"]
// console.log(words);
var wc={}
// for (let word of words){
//     if(word in wc){
//        wc[word]+=1
//     }
//     else{
//       wc[word]=1
//     }

// }

var words=text.split(" ").map(word=>word in wc?wc[word]+=1:wc[word]=1)
    console.log(wc);