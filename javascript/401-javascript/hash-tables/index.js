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

    has() { }

    keys() { }

}

let table = new HashTable(1024);
console.log(table)
table.set('Jack', { name: 'Jack', age: 21 })
// console.log(JSON.stringify(table.buckets[543]));

console.log(table.get('Jack'))