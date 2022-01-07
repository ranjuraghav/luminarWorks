
var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone",},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo"},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree"},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour"},

}


//q1 print 1000 user details
        //console.log(users[1000]);
//q2 p[rint 1003 personname
       //console.log(users[1003].personName);
//q3 1005 exist or not
       //console.log(1005 in users);
//q4 print balance of 1001
      //console.log(users[1001].balance);
      function authenticate(ac_num,password){
        //check acno exist
        //if(ac_num in users){
            if(validateAccountNumber(ac_num)){
            let pwd=users[ac_num].password
            if(pwd=password){
                //console.log("granted");
                return 1
            }
            else{
                //console.log("incorrect password");
                return -1
            }
        }
        else{
            //console.log("invalid account number");
            return 0;
        }
}
// console.log(authenticate(1000,"userone"));

function validateAccountNumber(acno){
return acno in users?true:false
}
function fundTransfer(from_acno,to_acno,amount){
  if(validateAccountNumber(from_acno) && validateAccountNumber(to_acno)){
      let Oldbal=users[from_acno].balance
      if(amount>Oldbal){
          console.log("insufficient balance");
      }

  }
  else{
      users[from_acno].balance-=amount
      let frm_acno_balance=balanceEnquiry(from_acno)
      console.log(`your accno ${from_acno} has been debited with ${amount}`);
      users[to_acno].balance+=amount
      let_to_acno_balance=balanceEnquiry(to_acno)
      console.log(`your accno ${to_acno} has been credited with ${amount}`);
  }
}


//create transaction and push to new array