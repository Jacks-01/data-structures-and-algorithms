'use strict'

const { LinkedList } = require('../linked-list/')



class HashTable {
    constructor(size) {
        this.size = size
        this.buckets = new Array(size)
    }

    hash(key) {
        let characters = key.split('')
        let asciiSum = characters.reduce((sum, character) => {
            return sum + character.charCodeAt(0)
        }, 0)

        let initialHash = asciiSum * 599
        return initialHash % size
    }

}

let table = new HashTable(1024)
console.log(table)
console.log(table.hash('Jack'));