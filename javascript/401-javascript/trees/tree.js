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




let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left - new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

// preorder: 10, 5, 1, 8 , 15, 17
tree.preOrder();
// inorder: 1, 5, 8, 10, 15, 17
tree.inOrder();
// postorder: 1, 8, 5, 17, 15, 10
tree.postOrder();