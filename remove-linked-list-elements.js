const util = require("util");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let currNode = head;

  while (currNode?.next) {
    if (currNode.next.val === val) {
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }
  if (head?.val === val) {
    head = head?.next || null;
  }
  return head;
};

console.log(
  util.inspect(
    removeElements(
      {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 6,
            next: {
              value: 3,
              next: {
                value: 4,
                next: {
                  value: 5,
                  next: {
                    value: 6,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
      6
    ),
    false,
    null,
    true
  )
);
