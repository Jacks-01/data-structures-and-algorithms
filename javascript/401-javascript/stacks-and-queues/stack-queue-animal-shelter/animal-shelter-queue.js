'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }


    Enqueue(animal) {
        let newNode = new Node(animal);
        if (!this.front) { // if empty, create pointers
            this.front = newNode;
            this.back = newNode;

        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        console.log(JSON.stringify(catQueue));
        return catQueue;

    }

    Dequeue(pref) {
        if (this.front === null) {
            return null;
        };

        let temp = this.front;
        if (this.front === this.back) { // this works
            console.log('q only has one item', this.front);
            this.front = null;
            this.back = null;
            console.log('x', catQueue);
            return
        }

        this.front = this.front.next
        console.log(catQueue);
        return catQueue;

    };
};

let dogQueue = new Queue();
let catQueue = new Queue();

catQueue.Enqueue('Jimmy');
catQueue.Enqueue('Timmy');
catQueue.Enqueue('Danny');

catQueue.Dequeue();