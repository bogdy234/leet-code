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
 * @return {ListNode}
 */
var reverseList = function (head) {
    let curr = head;
    let prev = null;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
    return head;
};

console.log(
    util.inspect(
        reverseList({
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
        }),
        false,
        null,
        true
    )
);
