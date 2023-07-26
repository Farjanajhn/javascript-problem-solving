




function isPositive(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; ++i){
    if (numbers[i] > 0) {
      sum = sum + numbers[i]
 }
  }
  return sum;
  
}
var numbers = isPositive([2, -5, 10, -3, 7])
console.log(numbers);