function accountFactory(name, balance) {
    const obj = {};
    obj.name = name;

    // encapsulate balance
    let _balance = balance;

    obj.deposit = function(value) {
        console.log(`Log the deposti`);
        console.log(`Checks...`);
        _balance+=value;
    };
    obj.withdraw = function(value) {
        console.log(`Log the withdraw`);
        console.log(`Checks...`);
        _balance-=value;
    }
    obj.getBalance = function() {
        return _balance
    }
    return obj;
}


const account1 = accountFactory('Maria', 1000);
const account2 = accountFactory('Pesho', 2000);


// account1.deposit(200);
account1.balance += 200
console.log(account1.getBalance()); // 1200

account1.withdraw(1000);
console.log(account1.balance); // 200
