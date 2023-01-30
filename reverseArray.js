// https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/
// Basic

function reverseRecursive(arr, l, r) {
    if (l >= r) return arr;

    [arr[l], arr[r]] = [arr[r], arr[l]];

    return reverseRecursive(arr, l + 1, r - 1);

    // TC: O(logN)
    // SC: O(logN)
}

function reverseIterative(arr, l, r) {
    while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }

    return arr;
    // TC: O(logN)
    // SC: O(1)
}

var arr1 = [4, 5, 1, 2];
var arr2 = [4, 5, 1, 2];

var arr1 = [4, 5, 1, 2, 3];
var arr2 = [4, 5, 1, 2, 3];

// var arr1 = "hollow";
// var arr2 = "hollow";
// arr1 = [...arr1];
// arr2 = [...arr2];

console.log(reverseRecursive(arr1, 0, arr1.length - 1));
console.log(reverseIterative(arr2, 0, arr2.length - 1));
