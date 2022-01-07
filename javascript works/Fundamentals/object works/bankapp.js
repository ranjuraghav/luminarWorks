class Bank{
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
    
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    
    }
   
    session={}
    // user:1000

    validateaccnumber(acno){
        return acno in this.accounts?true:false
    }

    authenticate(acno,password){
        if(this.validateaccnumber(acno)){
            let pwd=this.accounts[acno].password
            if(password==pwd){
                console.log("access granted");
                this.session["user"]=acno
            }
            else{
                console.log("invalid password");
            }
        }
            else{
                console.log("invalid account number");
            }
        }

        getBalance(acno){
            return this.accounts[acno].balance
        }
        balanceEnquiry(){
            if("user" in this.session){
          let loggeduser=this.session["user"]
          console.log(this.getBalance(loggeduser));
            }
            else{
                console.log("invalid session! u must login");
            }
        }
        loginRequired(){
            return "user" in this.session?true:false
        }

        
        loggeduser(){
            if(this.loginRequired){
               return  this.session["user"]
            }
        }
        fundTransfer(to_acno,amount){
        if(this.loginRequired){
let loggeduser=this.session["user"]
if(this.validateaccnumber(to_acno)){
    let curBalance=this.getBalance(loggeduser)
    if(amount>curBalance){
        console.log("insufficient Balance");
    }
    else{
    
this.accounts[to_acno].balance=curBalance+amount
let to_acno_balance=this.getBalance(to_acno)
this.accounts[loggeduser].balance=curBalance-amount
let loggeduser_from=this.getBalance(loggeduser)
let creditTransaction={from_acno:loggeduser,amount:amount}
let debitTransaction={to_acno:to_acno,amount:amount}
this.accounts[loggeduser]. transactions.debitTransactions.push(debitTransaction)
this.accounts[to_acno]. transactions.creditTransactions.push(creditTransaction)
// console.log("debit transaction of payer details",this.session[loggeduser].transactions.debitTransactions);
// console.log("credit transaction of receiver details",this.session[to_acno].transactions.creditTransactions);
console.log(`your acno ${loggeduser} has been debited with ${amount},available balance is ${loggeduser_from}`);
console.log(`your acno ${to_acno} has been credited with ${amount},available balance is ${to_acno_balance}`);

    }

}
else{
    console.log("invalid to account Number");
}

        }
        else{
            console.log("invalid session! u must login");
        }
        }
        getdebitTransaction(){
            let user=this.loggeduser
        this.accounts["user"].transactions.debitTransactions.forEach(t=>console.log(t))
        }
getcreditTransaction(){
    let user=this.loggeduser
    this.accounts["user"].transactions.creditTransactions.forEach(t=>console.log(t))
}

getTransactionHistry(){
    let user=this.loggeduser
    console.log(this.accounts[user].transactions);
}
    }


 var bank=new Bank()
//  console.log(bank.validateaccnumber(1000));
bank.authenticate(1000,"userone")

bank.balanceEnquiry();

bank.fundTransfer(1001,500);

