'use strict';

class ListNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }

}

class LinkedList {
    constructor(head = null) {
        this.head = head;

    }
    kthFromEnd(k) {
        let current = this.head;
        let count = 0
        let p1 = head;
        let p2 = head;
        let tail = 0

        while (current) {
            while (count < tail - 1) {
                if (p2 == null) {
                    return; // stop if the value of k is bigger than the length of the array
                }
                p2 = p2.next;
                count++;

            } if (p2 == null) { // if n is the first element from the last
                if (this.head != null)
                    console.log(`the ${n}th node from the last is ${this.head.value} `)
            }
            else {
                while (p2 != null) {
                    p1 = p1.next;
                    p2 = p2.next;

                }
                console.log(`the ${n}th node from the last is ${p1.value}`);
            }




            count++
            current.next;
        }







    };
}