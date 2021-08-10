// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// version 1
let numbersMultipliedBy100 = numbers.map(function (number) {
  return number * 100;
});
console.log(numbersMultipliedBy100);
// version 2
let numbersMultipliedBy100v2 = numbers.map((number) => {
  return number * 100;
});
console.log(numbersMultipliedBy100v2);
// version 3
let numbersMultipliedBy100v3 = numbers.map((number) => number * 100);
console.log(numbersMultipliedBy100v3);
