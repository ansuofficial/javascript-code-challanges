/*
Consider an array/list of item where some item may be missing from their place. We need a function that counts the number of items present in the array (true means present).

For example: 

[true,  true,  true,  false,
  true,  false, true,  false,
  true,  false, false, true ,
  false, false, true,  true]

  the correct answer would be 9

  Hint: Don't forget to check for bad values like null/undefined

*/

function countItemsPresent(items) {
  const result = items.filter((item) => item).length;
  return result;
}

console.log(
  countItemsPresent([
    null,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    undefined,
    false,
    true,
    false,
    true,
  ])
);
