type StudentInfo = {
  name: string;
  age: number;
  class: string;
  roll: number;
  isPoor?: boolean;
};

const student1: StudentInfo = {
  name: 'Hannan',
  age: 7,
  class: 'Play',
  roll: 3,
  isPoor: false,
};

const student2: StudentInfo = {
  name: 'Soikot',
  age: 16,
  class: 'Nine',
  roll: 20,
  isPoor: false,
};

type SingleStatus = boolean;

const isSingle: SingleStatus = false;

type Operation = (x: number, y: number) => number;

const calculate = (num1: number, num2: number, operation: Operation) => {
  return operation(num1, num2);
};

console.log(calculate(20, 10, (x, y) => x + y));
console.log(calculate(20, 10, (x, y) => x - y));
console.log(calculate(20, 10, (x, y) => x * y));
console.log(calculate(20, 10, (x, y) => x / y));
