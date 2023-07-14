// normal function
// also use default parameter
function addNumber(num1: number, num2: number = 10): number {
  return num1 + num2;
}

addNumber(2);

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

// console.log(bankInfo.addBalance(50));

// spread operator
const friends = ['binu', 'arif'];

const newFriends = ['shahin', 'borhan'];

friends.push(...newFriends);

// console.log(friends);

const greatFriend = (...friends: string[]): void => {
  friends.forEach((friend) => {
    console.log(`Hi ${friend}`);
  });
};

greatFriend('Binu', 'Arif', 'Shahin', 'Borhan');

const [wife] = friends;

const bestFriend = {
  name: 'Shahin',
  age: 23,
};

const { name: friendName } = bestFriend;
