class Bank {
    createAccount() {
        let first_name = fname.value;
        let acno = accno.value;
        let pwd = pwd1.value;
        let user = {
            first_name, acno, pwd
        }
        localStorage.setItem(user.acno,JSON.stringify(user))
        alert("Account created")
        location.href="./login.html"
    }
    validateAccountNumber(accno){
        return accno in localStorage?true:false
    }
    authenticate(){
        let account_number=accno.value;
        console.log(account_number);
        let password=pwd.value
        if(this.validateAccountNumber(account_number)){
            let data=JSON.parse(localStorage.getItem(account_number))
            if(password==data.password){
                sessionStorage.setItem("user",account_number)
                alert("login success")
                location.href="./homepage.html"
            }
            else{
                alert("Invalid password")
            }
        }
        else{
            alert("Invalid account number")
        }
    }
       fundTransfer(){
           let to_accountnumber=to_accno.value;
           let c_accno=c_accno.value;
           let amount=amt.value;
           if(to_accountnumber==to_accno){
               if(this.validateAccountNumber(c_accno)){
                   if(amount<Number(this.getBalance())){
                       let user_accno=sessionStorage.getItem("user")
                       let sender_details=this.getAccountDetails(user_accno)
                       let receiver_details=this.getAccountDetails(a_accno)
                       receiver_details["balance"]+=Number(amount)
                       localStorage.setItem(a_accno,JSON.stringify(receiver_details))
                       sender_details["balance"]-=Number(amount)
                       localStorage.setItem(user_acno,JSON.stringify(sender_details))
                   }
                   else{
                       alert("INSUFFICIENT BALANCE")
                   }
               }
               else{
                   alert("INVALID ACCOUNT NUMBER")
               }
           }
       }
}

var bank = new Bank();
bank.createAccount()
