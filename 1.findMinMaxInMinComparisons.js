// https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/
// Easy

function findMinimumMaximum(arr) {
    //Linear Approach
    let n = arr.length;
    
    if (n <= 0)
    return [-1, -1];
    
    if (n == 1)
    return [arr[0], arr[0]];

    let min;
    let max;
    
    if (arr[0] <= arr[1]) {
        min = arr[0];
        max = arr[1];
    } else {
        min = arr[1];
        max = arr[0];
    }
    
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max];

    // TC: O(n)
    // SC: O(1)
    // Comparisons: Loop runs for (n - 2)
    // Number of comparisons per iteration = 2, So 2(n - 2) Comparisons
    // Plus we have constant comparisons C to handle edge cases
    // 2 (n - 2) + C Comparisons
}
    
var arr = [3, 5, 4, 1, 9];
var arr = [22, 14, 8, 17, 35, 3];

console.log(findMinimumMaximum(arr));

// TODO: Try more efficient approach.
// Based on odd and even length set min and max initially
// Traverse the array and compare arr[i] and arr[i + 1] and assign min and max accordingly
// Jump 2 steps since 2 elements are traversed in 1 iteration
// Refer link at top
