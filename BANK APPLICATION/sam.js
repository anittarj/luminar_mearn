class Bank {

    createAccount() {

        let first_name = fname.value;
        let acno = accno.value;
        let password = pwd.value;
        let password1=pwd1.value
        if(password==password1){
            var user = {
                first_name, acno, password
            }
    
            console.log(first_name,acno,password);
        }
        else{
            console.log(`Password mismatch`);
        }
        // let user = {
        //     first_name, acno, password
        // }

        // console.log(first_name,acno,password);
        localStorage.setItem(user.acno, JSON.stringify(user))
        alert("Account created")
        location.href = "./login.html"

    }

    validateAccountNumber(acc_no) {

        return acc_no in localStorage ? true : false

    }

    authentication() {

        let account_number = accno.value;
        // console.log(account_number);
        let password = pwd.value;
        if (this.validateAccountNumber(account_number)) {

            let data = JSON.parse(localStorage.getItem(account_number))
            if (password == data.password) {

                sessionStorage.setItem("user", account_number)
                alert("login success")
                location.href = "./homepage.html"

            }
            else {

                alert("Invalid password")

            }

        }
        else {

            alert("Invalid account number")

        }

    }

    logout(){

        sessionStorage.removeItem("user")
        local.href="./login.html"

    }

    getBalance(){

        let login_acc=sessionStorage.getItem("user")
        let data=JSON.parse(localStorage.getItem(login_acc))
        return data.balance

    }

    balanceEnquiry(){

        document.querySelector("#result").innerHTML='<p> Your available balance is ${this.getBalance()} <p>'

    }

    fundTransfer(){

        let to_accountnumber=to_accno.value;
        let credict_accno=creditacc_no.value;
        let amount=amt.value;
        if(to_accountnumber==to_accno){

            if(this.validateAccountNumber(credit_accno)){

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
        else{

            alert("Sorry account number MISMATCH")

        }
    }

    getAccountDetails(acc_no){

        return JSON.parse(localStorage.getItem(acc_no))
        
    }
}

var bank = new Bank();
bank.createAccount();