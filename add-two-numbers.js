/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(input) {
  return input.reverse().reduce((acc, curr) => {
    if (acc == null) {
      acc = new ListNode(curr);
    } else {
      acc = new ListNode(curr, acc);
    }
    return acc;
  }, null);
}

var addTwoNumbers = function (l1, l2) {
  let result = [];
  let carry = 0;
  while (l1 || l2 || carry !== 0) {
    let sum = (l1?.val ?? 0) + (l2?.val ?? 0);
    if (typeof sum !== "number" || isNaN(sum)) {
      break;
    }
    if (sum >= 10) {
      sum = (sum % 10) + carry;
      carry = 1;
      result.push(sum);
    } else {
      if (sum + carry >= 10) {
        result.push(0);
        carry = 1;
      } else {
        result.push(sum ? sum + carry : carry);
        carry = 0;
      }
    }
    l1 = l1?.next;
    l2 = l2?.next;
  }
  console.log(result); // log result as array
  return arrayToList(result);
};

const l1Node = arrayToList([9, 9, 9, 9, 9, 9, 9]);
const l2Node = arrayToList([9, 9, 9, 9]);

console.log(addTwoNumbers(l1Node, l2Node));
