let LinkedList = require('./LinkedList.js');

let LL1 = new LinkedList();
LL1.add(1);
LL1.add(3);
LL1.add(5);
LL1.add(7);
LL1.add(9);


let LL2 = new LinkedList();
LL2.add(2);
LL2.add(4);
LL2.add(6);
LL2.add(8);
LL2.add(10);
LL2.add(15);
LL2.add(11);

function zipTwoLists(LL1, LL2) {
    const zipList = new LinkedList();
    let currentZip = zipList.head
    let currentOne = LL1.head;
    let currentTwo = LL2.head;
    let counter = 0;
    while (currentOne || currentTwo) {
        if (!zipList.head) {
            counter++;
            zipList.head = currentOne;
            currentZip = zipList.head;
            currentOne = currentOne.next;
        } else if (counter % 2 === 0) {
            if (currentOne) {
                currentZip.next = currentOne;
                currentZip = currentZip.next;
                currentOne = currentOne.next;
            }
            counter++;
        } else if (counter % 2 === 1) {
            if (currentTwo) {
                currentZip.next = currentTwo;
                currentZip = currentZip.next;
                currentTwo = currentTwo.next;
            }
            counter++;
        }
    }
    return zipList;
}



const zippedList = zipTwoLists(LL1, LL2)
console.log(zippedList.toString())