const carMakers = ['ford', 'toyota', 'mercedes'];
const dates = [new Date(), new Date(), new Date()];

const emptyCarMakers: string[] = [];

const carsByMake = [['f150'], ['corolla'], ['E200']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100)

// Help with `map`
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible Types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());

