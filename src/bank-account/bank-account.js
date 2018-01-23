let movements = [];

export class BankAccount {
    constructor() {
        movements = [];
    }

    getBalance() {
        var balance = 0;
        for(let movement of movements){
            balance += movement.amount;
        }
        return balance;
    }

    makeDeposit(amount){
        var movement = new Movement("deposit", amount);
        movements.push(movement);
    }

    makeWithdraw(amount){
        var movement = new Movement("withdraw", -amount);
        movements.push(movement);
    }

    showMovements() {
        var movementsDescription = '';
        for(let movement of movements){
            movementsDescription += movement.print();
        }
        return movementsDescription;
    }
    
}

class Movement{

    constructor(operation, amount) {
        this.date = new Date();
        this.operation = operation;
        this.amount = amount;
    }

    print(){
        return `operation: ${this.operation}; amount: ${this.amount};`;
    }
}