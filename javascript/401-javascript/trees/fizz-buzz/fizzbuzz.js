class KaryNode {
    constructor(value, k) {
        this.value = value;
        this.k = k;
        this.children = [];
        // this.children = new Array(k).fill(undefined);
    }
};

class KaryTree {
    constructor() {
        this.root = null;
    };


    replaceValues = (oldNode, newNode) => {
        // loop old nodes children
        oldNode.children.map(() => { });
        //create a new node that is a copy
        let newNode = oldNode;
    }

    fizzBuzzTree = (tree) => {

        let newTree = new KaryTree();
        newTree.root = new KaryNode(tree.root.value);

        traverse = (node) => {
            let queue = [];
            queue.push(this.root);
            while (queue.length) {
                let node;
                node = queue.shift();

                for (let i = 0; i < queue.length; i++) {
                    if (node.children[i] % 5 === 0 && node.children[i] % 3 === 0) {
                        node.children[i].value = 'FizzBuzz'
                        queue.push(node.children[i]);
                    } else if (node.children[i] % 3 === 0) {
                        node.children[i].value = 'Fizz';
                        queue.push(node.children[i]);
                    } else if (node.children[i] % 5 === 0) {
                        node.children[i].value = 'Buzz';
                        queue.push(node.children[i]);
                    } else {
                        node.children[i].value = (`${node.children[i].value}`);
                        queue.push(node.children[i]);
                    }
                }
            };
        }
        traverse(tree.root);
        console.log(queue);
        return queue;
    };
};

let newNode = new KaryNode(5, 3);
newNode.children = [1, 2, 3];

let newNodeTwo = new KaryNode(15, 3);
let newNodeThree = new KaryNode(5, 3);



let tree = new KaryTree(newNode);
// tree.root(newNode);
console.log(tree);
