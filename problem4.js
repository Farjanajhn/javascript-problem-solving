function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // If no pair is found, return an empty array.
  return [];
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;

// Example Output
const result = findTwoNumbersWithSum(sortedArray, targetValue);
console.log(result);
