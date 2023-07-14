// nullable
const search = (value: string | null): void => {
  if (value === null) {
    console.log('There is nothing to search');
  } else {
    console.log('Searching...');
  }
};

search(null);

// unknown
const calculateCarSpeed = (value: unknown) => {
  if (typeof value === 'number') {
    const convertedValue = (value * 1000) / 3600;
    console.log(`Current car speed in ms is: ${convertedValue}`);
  } else if (typeof value === 'string') {
    const [speed, unit] = value.split(' ');
    const convertedValue = (Number(speed) * 1000) / 3600;
    console.log(`Current car speed in ms is: ${convertedValue}`);
  } else {
    console.log(
      `You provide a wrong type data. Data must be number or string. Provided data is: ${value}`
    );
  }
};

calculateCarSpeed(10);
calculateCarSpeed('10 km/h');
calculateCarSpeed(true);

function throwError(msg: string): never {
  throw Error(msg);
}

throwError('error');
