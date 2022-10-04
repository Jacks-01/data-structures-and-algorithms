'use strict';
class ListNode { //* a single node in the list
    constructor(value) {
        this.data = value //* the value for the node
        this.next = null //* we assume there is only one node until told otherwise. 
    }

};

class LinkedList {
    constructor(head = null) { //* head is initialized to null
        this.head = head;   //* head is null because it does not yet have a node assigned to it
    }   
    insert(value) {
        const node = new ListNode(value); //* create new node

        if (!this.head) { //* if head is null, head is given the value of the new node.
            this.head = node;
            return
        }
        // traverse linked list and add new node to the end
        let current = this.head; //* current is pointing to head
        while (current.next) { //* while there is a next node with a value, keep moving to the next node
            current = current.next;
        }   

        current.next = node; //* eventually, next will be null, in which case we assign the new node to the end
    }
    includes(value) {
        //* search the linked List

    }
    toString() {
        //* returns a string with all the values in the linked list 
    }
}




let list = new LinkedList(node1)

module.exports = LinkedList;


/**
 * *Linked list traversal (could have a callback)
 * traverse(){
 * let current = this.head;
 * while(current){
 *  console.log(JSON.strigify(current.value))
 *  current = current.next;
 *  }
 * };
 */