function findTheSecondSmallestNum(arr) {
  

  let smallest = arr[0];
  let secondSmallest = null;

  for (i = 1; i < arr.length; i++){

    let currentNum = arr[i]
    
    if (currentNum < smallest) {
      secondSmallest = smallest;
      smallest = currentNum;
    }
    else if (secondSmallest === null || currentNum < secondSmallest) {
      secondSmallest = currentNum;
    }
  }
  return secondSmallest;
}


let result = findTheSecondSmallestNum([4,3,2,1]);
console.log(result);