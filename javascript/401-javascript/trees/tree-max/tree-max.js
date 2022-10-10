'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;

    }

    inOrder() {

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            console.log(node.value);
            if (node.right) traverse(node.right)
        }

        traverse(this.root);
    }

    findMax() {
        let temp = null;
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.value > temp) { temp = node.value };
            if (node.right) traverse(node.right);
            if (node.value > temp) { temp = node.value };
            return temp;
        };
        traverse(this.root);
        console.log(temp);
    }
};

let tree = new BinaryTree();
tree.root = new Node(2);
tree.root.left = new Node(7);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(6);
tree.root.left.right.left = new Node(5);
tree.root.left.right.left.right = new Node(11);
tree.root.right = new Node(5);
tree.root.right.right = new Node(9);
tree.root.right.right.left = new Node(4);

tree.findMax();

// console.log(JSON.stringify(tree));


