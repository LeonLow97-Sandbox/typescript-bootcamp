const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// Function with no return type
const logger = (message: string): void => {
  console.log(message);
};

// Throw error with no return value (RARE CASE)
// use only when you expect the function to never return a value
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// Destructuring object literals
const logWeather = ({date, weather}: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

// ES2015
// const logWeather = ({ date, weather }) => {
//   console.log(date);
//   console.log(weather);
// };

logWeather(todaysWeather);

