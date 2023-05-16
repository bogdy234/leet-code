/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  let firstStep = 1;
  let secondStep = 1;
  let thirdStep = 0;
  for (let i = 2; i <= n; i++) {
    thirdStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = thirdStep;
  }

  return thirdStep;
};

console.log(climbStairs(4));

/*
1 -> 1 
2 -> 2
3 -> 3
4 -> 5

*/

/*
4 = 1+1+1+1
    1+1+2
    1+2+1
    2+1+1
    2+2
*/
