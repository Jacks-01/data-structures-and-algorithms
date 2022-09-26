'use strict';
class Node { //* a single node in the list
    constructor(value) {
        this.data = value //* the value for the node
        this.next = null //* we assume there is only one node until told otherwise. 
        this.previous = null
    }

};

class LinkedList {
    constructor(head = null) { //* head is initialized to null
        this.head = head;   //* head is null because it does not yet have a node assigned to it
    }
    insert(value) {
        const node = new Node(value); //* create new node

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

    append(value) {
        let node = this.head;
        if (node == null) {
            //* if the list is empty, create the node and end
            this.head = value;
            return
        }
        while (node.next) { //* while there is still another node next, keep traversing
            node = node.next;
        }
        //* once you are at the end of the list, make the next (which is currently null) the newNode  
        node.next = value;
    }

    insertBefore(value, newValue) {
        if (value == head) {
            let newNode = new Node(newValue)
            newNode.next = head;

            head = newNode;
            return newNode

        } else {
            let current = this.head; //* start at the head node
            while (current) {
                if (current.value == newValue) { //* if the current node matches newValue

                    let newNode = new Node(newValue); //* create a new node with newValue
                    newNode.next = current;         //* set the next value of the node to the current node

                    current = newNode //* make the current node the newNode
                    return newNode;

                } else {
                    //* otherwise keep looping until there is a match
                    current = current.next
                }
                //* if there is no matching value, return
                return;
            };


        }

    }

    insertAfter(value, newValue) {
        if (value == head) {
            let newNode = new Node(newValue);
            newNode.previous = head;

            head = newNode;
            return newNode;
        }

        else {
            let current = this.head; //* start at the head node
            while (current) {
                if (current.value == newValue) { //* if the current node matches newValue

                    let newNode = new Node(newValue); //* create a new node with newValue
                    current = current.next; //* set the current value of the node to the next

                    current = newNode //* make the current node the newNode
                    return newNode;
                };
                current = current.next;
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