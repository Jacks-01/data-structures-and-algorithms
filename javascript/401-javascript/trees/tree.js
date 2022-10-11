'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class KaryNode {
    constructor(value, k) {
        this.value = value;
        this.k = k;
        this.children = [];
        // this.children = new Array(k).full(null);
    }
}

class BinaryTree {
    constructor() {
        this.root = null;

    }

    preOrder() {
        //recursive helper function
        const traverse = (node) => {
            // base case
            console.log(node.value);

            // recursive cases
            //looks left if there is left node and serves an "eject" if no left node exits
            if (node.left) {
                traverse(node.left);
            }
            //looks right if there is a right node and serves an "eject" if no left node exits
            if (node.right) {
                traverse(node.right);
            }

            //* alternative method
            // if (node.left) traverse(node.left);
            // if (node.right) traverse(node.right);
        }

        traverse(this.root);
    }

    inOrder() {

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            console.log(node.value);
            if (node.right) traverse(node.right)
        }

        traverse(this.root);
    }

    postOrder() {

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right)
            console.log(node.value);
        }

        traverse(this.root);

    }
}

class BST extends BinaryTree {
    constructor() {
        super();
        this.root = null;
    }

    insert(value) {

        let newNode = new Node(value);
        if (this.root === null) { this.root = newNode; }
        else { this.insertNode(this.root, newNode); }
    };

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        }

        else {
            if (node.right === null) { node.right = newNode; }
            else { this.insertNode(node.right, newNode); }
        }
    }

    contains(string) {
        const traverse = (node) => {

            if (node.left) traverse(node.left);
            if (node.value === string) { return true; }
            if (node.right) traverse(node.right)
            if (node.value === string) { return true; }
            else { return false; }


        }

        traverse(this.root);
    }
};






// let tree = new BinaryTree();
// tree.root = new Node(10);
// tree.root.left - new Node(5);
// tree.root.right = new Node(15);
// tree.root.left.left = new Node(1);
// tree.root.left.right = new Node(8);
// tree.root.right.right = new Node(17);

// preorder: 10, 5, 1, 8 , 15, 17
// tree.preOrder();
// inorder: 1, 5, 8, 10, 15, 17
// tree.inOrder();
// postorder: 1, 8, 5, 17, 15, 10
// tree.postOrder();

let tree2 = new BST();
tree2.insert(24);
tree2.insert(5);
tree2.insert(6);
tree2.insert(12);
tree2.insert(123);
tree2.insert(22);
tree2.insert(29);
console.log(JSON.stringify(tree2));
