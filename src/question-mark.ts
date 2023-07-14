// ternary operator

const currentAge = 18;

const isAdultAge = currentAge >= 18 ? 'Yes' : 'No';

// console.log(isAdultAge);

// nulish coeslancing operator

const isAuthenticated = '';

const userName = isAuthenticated ?? 'Guest';

console.log({ userName });

type People = {
  name: string;
  age: number;
  address: {
    city: string;
    road: string;
    home?: string;
  };
};

const people1: People = {
  name: 'Arif',
  age: 22,
  address: {
    city: 'Gaibandha',
    road: 'Kochashahar',
  },
};

console.log(people1.address.home ?? 'No Road');
