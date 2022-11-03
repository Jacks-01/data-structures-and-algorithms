'use strict'

const { LinkedList } = require('../linked-list/')



class HashTable {
    constructor(size) {
        this.size = size
        this.buckets = new Array(size)
    }

    /**
     * 
     * @param {String} key what you are hashing
     * @returns a number
     */
    hash(key) {
        let characters = key.split('')
        let asciiSum = characters.reduce((sum, character) => {
            return sum + character.charCodeAt(0)
        }, 0)

        let initialHash = asciiSum * 599
        return initialHash % this.size
    }

    /**
     * 
     * @param {string} key 
     * @param {*} value 
     */
    set(key, value) {
        let position = this.hash(key)
        let data = { [key]: value }


        if (this.buckets[position]) {
            let bucket = this.buckets[position]
            bucket.insert(data)

        } else {
            let bucket = new LinkedList();

            bucket.insert(data);

            this.buckets[position] = bucket
        }
    }

    get(key) {
        let position = this.hash(key)

        if (this.buckets[position]) {
            let bucket = this.buckets[position]

            let data = bucket.head.data[key]

            return data

        }
    }

    has(key) {
        let position = this.hash(key)
        if (this.buckets[position]) { return true }
        else { return false }
    }

    keys() {
        let keys = []

        //! Not sure if this works in every scenario, could malfunction with collisions. Needs more testing
        for (let bucket of this.buckets) {
            if (bucket) {
                // console.log(JSON.stringify(bucket))
                //! Possible modification could be made to use a for...in loop instead of Obj.values()
                bucket.traverse(() => keys.push(Object.values(bucket.head.data)))
            }
        }


        return keys //* Sample output: [ [{ name: Jack, age: 21 }], [{ name: bob, age: 87 }] ]

    }
}

let table = new HashTable(1024);
table.set('Jack', { name: 'Jack', age: 21 })
table.set('Kora', { name: 'Kora', age: 3 })
// console.log(table)

// console.log(JSON.stringify(table.buckets[543]));
// console.log(table.has('Jack'));
// console.log(table.has('Kora'));

console.log(table.keys());

// console.log(table.get('Jack'))