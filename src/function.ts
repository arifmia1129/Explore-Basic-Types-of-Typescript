// normal function
function addNumber(num1: number, num2: number): number {
  return num1 + num2;
}

addNumber(2, 3);

// arrow function
const addNumberWithArrowFunction = (num1: number, num2: number): number =>
  num1 + num2;

//   callback
const arr = [1, 2, 3, 4];

const newArr: number[] = arr.map((elem: number) => elem * elem);

const bankInfo: {
  owner: string;
  balance: number;
  addBalance(amount: number): number;
} = {
  owner: 'Arif',
  balance: 0,
  addBalance(amount: number) {
    return this.balance + amount;
  },
};

console.log(bankInfo.addBalance(50));
