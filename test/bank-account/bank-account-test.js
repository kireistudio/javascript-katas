import { BankAccount } from '../../src/bank-account/bank-account'
var assert = require('chai').assert

describe('bank-account-kata', function() {

  it('should has balance zero when new bank account is created', function() {
    var bankAccount = new BankAccount();
    var result = bankAccount.getBalance();
    assert.equal(0, result);
  });

  it('should has balance equals to deposit when new deposit is created', function() {
    var bankAccount = new BankAccount();
    bankAccount.makeDeposit(10);
    var result = bankAccount.getBalance();
    assert.equal(10, result);
  });

  it('should has balance zero when new deposit and withdraw', function() {
    var bankAccount = new BankAccount();
    bankAccount.makeDeposit(10);
    bankAccount.makeWithdraw(10);
    var result = bankAccount.getBalance();
    assert.equal(0, result);
  });

  it('should show movements after new deposit', function() {
    var bankAccount = new BankAccount();
    bankAccount.makeDeposit(10);
    var result = bankAccount.showMovements();
    assert.equal("operation: deposit; amount: 10;", result);
  });

});