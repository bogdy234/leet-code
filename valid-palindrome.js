/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let lowerCaseString = s
    .split("")
    .map((c) => c.toLowerCase())
    .filter((c) => (isNaN(c) ? c >= "a" && c <= "z" : c))
    .join("");
  lowerCaseString = lowerCaseString.replace(/\s/g, "");

  return lowerCaseString === lowerCaseString.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));
console.log(isNaN("0"));
