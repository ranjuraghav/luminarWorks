function displaynum(num){
    result.value+=num
}
function clearBox(){
    result.value=""
}
function evaluateExpression(){
    result.value=eval(result.value)
}
function delExpression(){
result.value=result.value.slice(0,-1)  //slice method
}

