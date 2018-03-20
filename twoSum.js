const twoSum = (arr, targetValue) => {
  let returnArr = [,];
  for (let i = 0; i < arr.length; i++) {
    returnArr[0] = i;
    let currentValue = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let nextValue = arr[j];
      if (currentValue + nextValue === targetValue) {
        returnArr[1] = j;
        return returnArr;
      }
    }
  }
}

module.exports = twoSum;
