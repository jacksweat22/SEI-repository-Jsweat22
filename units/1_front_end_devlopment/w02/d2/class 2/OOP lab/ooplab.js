class bankAccount{
    constructor(ownerName, balance, acctNum) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.acctNum = acctNum;
    }
        deposit(){
            console.log(`I am ${this.ownerName} and I would like to access ${this.acctNum} `)
        }
}