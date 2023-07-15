function sumSquaresDigits(n) {
  let sum = 0;

  while (n) {
    sum = sum + (n % 10) * (n % 10);
    n = Math.floor(n / 10);
  }

  return sum;
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const frequencyMap = new Map();
  let digitsSum = n;
  while (digitsSum !== 1) {
    digitsSum = sumSquaresDigits(digitsSum);
    const mapValue = frequencyMap.get(digitsSum);
    if (mapValue === 1) {
      return false;
    }
    frequencyMap.set(digitsSum, 1);
  }
  return true;
};

console.log(isHappy(19));
console.log(isHappy(2));
