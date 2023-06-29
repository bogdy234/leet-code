/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function (n) {
  let ones = 0;

  while (n) {
    if (n % 2 === 1) {
      ones++;
    }
    n = parseInt(n / 2);
  }

  return ones;
};

var hammingWeightSecondApproach = function (n) {
  let ones = 0;

  n = n.toString(2);
  for (let i = 0; i < n.length; i++) {
    const number = n[i];
    if (number === "1") {
      ones++;
    }
  }

  return ones;
};

// console.log(hammingWeight(00000000000000000000000000001011));
// console.log(hammingWeightSecondApproach(00000000000000000000000000001011));
