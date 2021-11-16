// build a bank application with 
// authentication
// fundTransfer()
// balanceEnquiry()

class Bank {
    session = {}
    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 5000, transactions:
                [
                    { to: 1002, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1001, password: "userone", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
    }
    validateAccountNumber = (accno) => accno in this.accounts ? true : false

    getAccountDetails() {
        return this.accounts
    }
    authenticate(accno, password) {
        if (this.validateAccountNumber(accno)) {
            let pwd = this.accounts[accno].password
            // return console.log(pwd==password?`1`:`0`);
            if (pwd == password) {
                this.session["user"] = accno
                console.log(this.session);
                return 1 //login successfull 
            }
            else {
                return 0 //invalid password
            }
            // pwd == password ? 1 : 0
        }
        else {
            return -1 //invalid account number
        }
    }
    balanceEnquiry() {
        let user = this.session["user"]
        return this.accounts[user].balance
    }
    fundTransfer(to_accno, amount) {
        if(this.validateAccountNumber(to_accno)){
            let user=this.session["user"]
            let bal=this.balanceEnquiry()
            if(bal>amount){

                this.accounts[user].balance-=amount

                this.accounts[to_accno].balance+=amount

                this.accounts[user].transactions.push({to:to_accno,amount:amount})
                console.log(this.accounts[user]);
            }
            else{
                console.log(`Failed due to insufficient balance`);
            }
        }
        // else{
        //     console.log("Invalid accnjjjjo");
        // }
    }
    paymentHistory() {
        let user = this.session["user"]
        console.log(this.accounts[user].transactions);
    }
    creditsTransactions() {
        let user = this.accounts[accno]
        console.log(this.accounts[user].transactions);
    }
}

// display account details of all
// var obj1= new Bank()
// console.log(obj1.getAccountDetails());

// check for authentication 
// var obj2 = new Bank()
// var user = console.log(obj2.authenticate(1001, "userone"));
// console.log(user == 1 ? `login success` : user == -1 ? `invalid account number` : `invalid password`);

// check balance
// var obj3 = new Bank()
// var user=obj3.authenticate(1002,"usertwo")
// obj3.balanceEnquiry()

// fund transfer
var obj3 = new Bank()
var user = obj3.authenticate(1002, "usertwo")
console.log(obj3.balanceEnquiry());
obj3.fundTransfer(1001, 5000)