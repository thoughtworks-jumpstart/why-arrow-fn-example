const printer = {
  printBalance: function (getBalance) {
    console.log(getBalance());
  }
}

class BankAccount {
  constructor(val) {
    this.val = val;
  }

  getBalanceArrFn = () => {
    return this.val;
  }

  printBalance() {
    printer.printBalance(this.getBalanceFn);
  }

  getBalanceFn() {
    return this.val;
  }
  
  printBalanceArr() {
    printer.printBalance(this.getBalanceArrFn);
  }
}

const bobAccount = new BankAccount(5);


try {
  bobAccount.printBalance();
} catch(err) {
  console.log(err.message)
}

bobAccount.printBalanceArr();
