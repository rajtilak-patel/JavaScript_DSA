function BankAccount(name,balance=0){

    this.name=name;
    this.account = Date.now();
    this.balance= +balance;  

}

BankAccount.prototype.deposit = function(amount){
    this.balance +=amount
}

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount
}

let myAccount = new BankAccount("rajtilak",2000);
let rajtilak = new BankAccount("rajtilak",2000);



myAccount.deposit(2000)
console.log(myAccount)
console.log(rajtilak)