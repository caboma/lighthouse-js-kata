const sumLargestNumbers = function(data) {
  // Put your solution here
  let highestNum1 = 0;
  let highestNum2 = 0;
  for (let i = 0; i < data.length; i++){
    if (data[i] > highestNum1){
      highestNum2 = highestNum1;
      highestNum1 = data[i];
    }
    else if (data[i] > highestNum2){
      highestNum2 = data[i];
    }
  }
  let sum = highestNum1 + highestNum2;
  return (sum);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([100, 4, 56, 6, 100, 2]));