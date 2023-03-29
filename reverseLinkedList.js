// https://leetcode.com/problems/reverse-linked-list/description/
// Easy

/*
init -> curr = 1; prev = null;
n = 2; 1 -> null; prev = 1 -> null; curr = 2;
n = 3; 2 -> 1 -> null; prev = 2 -> 1 -> null; curr = 3;
n = 4; 3 -> 2 -> 1 -> null; prev = 3 -> 2 -> 1 -> null; curr = 4;
n = 5; 4 -> 3 -> 2 -> 1 -> null; prev = 4 -> 3 -> 2 -> 1 -> null; curr = 5;
n = null; 5 -> 4 -> 3 -> 2 -> 1 -> null; prev = 5 -> 4 -> 3 -> 2 -> 1 -> null; curr = null;
*/
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let n = curr.next;
        curr.next = prev;
        prev = curr;
        curr = n;
    }

    return prev;
};
