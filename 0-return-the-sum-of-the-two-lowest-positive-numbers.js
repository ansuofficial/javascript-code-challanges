/*

0. A function that returns the sum of the two lowest positive numbers.

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.

*/

function sumOfTwoLowestNumbers(values) {
  if (values.length == 0) return "No values found!";

  if (values.length == 1) return "You must pass at least 2 value!";

  const sortedValues = values.sort((a, b) => a - b);
  return sortedValues[0] + sortedValues[1];
}

sumOfTwoLowestNumbers([]);
sumOfTwoLowestNumbers([0]);
sumOfTwoLowestNumbers([1, 20, 8]);
sumOfTwoLowestNumbers([10, 4, 7]);
