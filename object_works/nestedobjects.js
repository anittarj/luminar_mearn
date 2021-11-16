var accounts = {
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

// print balance of 1001
console.log(accounts[1001]["balance"]);

// authentication
// 1001,userone
// 1002,userfour
// accno=1002
function login(acno, password) {
    if (acno in accounts) {
        let pwd = accounts[acno].password
        if (pwd == password) {
            console.log("Login success");
        }
        else {
            console.log("Invalid password");
        }
    }
    else {
        console.log("Invalid account number");
    }
}
login(1001,"usertwo");

// print the transaction details of account 1001
console.log(accounts[1001].transactions);

accounts