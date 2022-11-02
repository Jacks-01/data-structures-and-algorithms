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

}

let table = new HashTable(1024);
console.log(table)
console.log(table.hash('Jack'));
table.set('Jack', { name: 'Jack', age: 48 })
console.log(JSON.stringify(table.buckets[543]));