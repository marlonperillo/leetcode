/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
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
// eslint-disable-next-line no-unused-vars
const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  // eslint-disable-next-line no-undef
  let returnList = new ListNode();
  const head = returnList;
  while (!!l1 && !!l2) {
    let sum = l1.val + l2.val + carry;
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    returnList.val = sum;

    l1 = l1.next;
    l2 = l2.next;
    if (!!l1 && !!l2) {
      returnList.next = new ListNode();
      returnList = returnList.next;
    }
  }

  while (!!l1) {
    if (!!l1) {
      returnList.next = new ListNode();
      returnList = returnList.next;
    }
    let sum = l1.val + carry;
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    returnList.val = sum;
    l1 = l1.next;
  }

  while (!!l2) {
    if (!!l2) {
      returnList.next = new ListNode();
      returnList = returnList.next;
    }
    let sum = l2.val + carry;
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    returnList.val = sum;
    l2 = l2.next;
  }

  if (carry === 1) {
    returnList.next = new ListNode();
    returnList.next.val = 1;
  }

  return head;
};
