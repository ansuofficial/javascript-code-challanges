/*
Write a function that takes numbers as a parameter and returns the average of the numbers
*/

// Solution1

// function averageCalculator(numbers) {
//   const args = [...numbers];
//  if (args.length == 0) return 0;

//   let sum = 0;

//   args.forEach((num) => {
//     sum = sum + num;
//   });

//   return sum / args.length;
// }

// Solution 2

// function averageCalculator(numbers) {
//   if (numbers.length == 0) return 0;

//   let total = 0;

//   for (let count = 0; count < numbers.length; count++) {
//     total = total + numbers[count];
//   }

//   return total / numbers.length;
// }

// Solution 3

function averageCalculator(numbers) {
  if (numbers.length == 0) return 0;
  result = numbers.reduce((acc, next) => acc + next, 0);
  return result / numbers.length;
}

console.log(averageCalculator([1, 2, 10]));
console.log(averageCalculator([]));
