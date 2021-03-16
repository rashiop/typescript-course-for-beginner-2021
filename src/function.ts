function addNumber(number1: number, number2: number) {
  return number1 + number2;
}

let combinedValue: (N1: number, n2: number) => number;

combinedValue = addNumber;

console.log(combinedValue(10, 20));
