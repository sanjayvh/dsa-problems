// https://leetcode.com/problems/maximum-subarray/
// https://www.youtube.com/watch?v=VMtyGnNcdPw
// Medium

function maximumSubArray(arr) {
    // TODO: This function is not accepted in leetcode as it is taking more time for a large input

    // Generate subarray's and then calculate sum of each subarray
    // to determine which subarray has maximum sum
    // (1), (2), (3), (4), (1, 2), (2, 3), (3, 4), (1, 2, 3), (2, 3, 4), (1, 2, 3, 4)

    // Think of generating in below format
    // (1) (1, 2) (1, 2, 3) (1, 2, 3, 4)
    // (2) (2, 3) (2, 3, 4)
    // (3) (3, 4)
    // (4)

    let subArrays = [];
    let index = 0;
    let maxSum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            subArrays[index] = arr.slice(i, j);
            let sum = subArrays[index].reduce((acc, item) => acc + item);
            // console.log(sum, subArrays[index]);
            maxSum = Math.max(maxSum, sum);
            index++;
        }
    }

    // console.log(subArrays, subArrays.length);
    return maxSum;
}

function maximumSubArray2(nums) {
    let maxSum = nums[0];
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (sum + nums[i] < nums[i]) {
            sum = nums[i];
        } else {
            sum += nums[i];
        }

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

function maximumSubArray3(nums) {
    let maxSum = nums[0];
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (sum >= 0) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}


var arr = [1, 2, 3, 4, 5, 6];
var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// var arr = [1];
// var arr = [5,4,-1,7,8];
// var arr = [-1];

console.log(maximumSubArray(arr));
console.log(maximumSubArray2(arr));
console.log(maximumSubArray3(arr));
