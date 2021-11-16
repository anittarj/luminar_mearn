class Bank{
    createAccount(c_name,accno,ac_type,min_bal){
        this.c_name=c_name,
        this.accno=accno,
        this.ac_type=ac_type,
        this.balance=min_bal
    }
    deposit(amount){
        this.balance+=amount
        console.log(`your accont ${this.accno} has been credited with amount ${amount} aval bal ${this.balance}`);
    }
    withdrawal(amount){
        if(this.balance>amount){
            this.balance-=amount;
            console.log(`your accont ${this.acno}ha been dedited with amount ${amount} aval bal ${this.balance}`);



        }
        else{
            console.log(`transaction failed -- INSUFFICIENT BALANACE`);
        }
    }
}

var cust1= new Bank();
cust1.createAccount("ram",1000,"savings",3000)
cust1.withdrawal(10000)
cust1.deposit(3000)
cust1.withdrawal(50)