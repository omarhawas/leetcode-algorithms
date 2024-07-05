Write a function that takes a non-empty array of integers that are sorted in ascending order and returns a new array of the same length
with the squares of the original integers also sorted in ascending order.

Example:
array = [1, 2, 3, 5, 6, 8, 9]

output:
[1, 4, 9, 25, 36, 64, 81]

Brute Force Explanation

- Map through the array and multiply every number by itself. Using .map will create a new array holding the squared values. Store in a variable
- Sort the new array variable using .sort. Return in ascending order
