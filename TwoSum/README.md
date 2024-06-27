Explanation with nested loop:

- Loop through the array
- Create a second loop, and if the value in the first loop + the value in the second loop = target, then we return the indices of both numbers

Explanation with hash map:

- create an empty object
- loop through the array
- create a variable that is equal to the target minus the value of each number in the array (searchingNumber)
- if searchingNumber is already in the hash map, then we have found the two numbers that add up to the target. The current number and searchingNumber stored in the hash map are the solution
- if searchingNumber is not in the hash map, then add it and its index to the hash map
- when the solution is found, return the indices of the two numbers
