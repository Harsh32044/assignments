/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (numbers.length == 0) {
        return undefined;
    }
    let result = numbers[0];
    numbers.forEach(num => {
        result = Math.max(result, num)
    })

    return result;
}


module.exports = findLargestElement;