/**
Return the total number of arrays inside a given array.

### Examples

numOfSubbarrays([[1, 2, 3]]) ➞ 1
numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3
numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4
numOfSubbarrays([1, 2, 3]) ➞ 0
 */

// const numOfSubbarrays;
function numOfSubbarrays(arr){
   
    return arr.filter(a => a instanceof Array).length;
    
}

exports.numOfSubbarrays = numOfSubbarrays;
