# # Binary Search with Arrays
<!-- Description of the challenge -->

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

## Whiteboard Process
<!-- Embedded whiteboard image -->

[Diagram](./binary-search.png)

## Approach & Efficiency
<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->
We took the approach of marking the beginning and end of the array, then using a while loop to iterate through the array, splitting it at its midpoint each time until only one number remained.

BigO
time: O(n)
space: O(n)