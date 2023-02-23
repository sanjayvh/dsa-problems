// https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1
// https://www.geeksforgeeks.org/chocolate-distribution-problem/
// Easy

//       l        r 
// 1 3 4 7 9 9 12 56
// 8 6 8 49 

//         l    r
// 2 3 4 7 9 12 56
// 2 4 5 5 47

function findMinDiff(arr, n, m) {
    let l = 0;
    let r = m - 1;
    let diff = Number.MAX_VALUE;
    
    arr.sort((a, b) => a - b);
    
    while (r < n) {
        diff = Math.min(diff, arr[r] - arr[l]); 
        l++;
        r++;
    }
    
    return diff;
}

var arr = [3, 4, 1, 9, 56, 7, 9, 12];
var n = 8;
var m = 5;

var arr = [7, 3, 2, 4, 9, 12, 56];
var n = 7;
var m = 3;

console.log(findMinDiff(arr, n, m));
