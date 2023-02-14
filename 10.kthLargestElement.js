// https://leetcode.com/problems/kth-largest-element-in-an-array/description/
// Medium

function partition(nums, low, high) {
    let pivot = nums[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (nums[j] < pivot) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    i++;
    [nums[i], nums[high]] = [nums[high], nums[i]];
    return i;
} 

function kthLargestElement(nums, low, high, k) {
    let n = nums.length;
    let pivot = partition(nums, low, high);

    if (pivot == n - k) {
        return nums[pivot];
    } else if (pivot < n - k) {
        return kthLargestElement(nums, pivot + 1, high, k);
    } else {
        return kthLargestElement(nums, low, pivot - 1, k);
    }
}

var findKthLargest = function(nums, k) {
    return kthLargestElement(nums, 0, nums.length - 1, k);
};

var nums = [3, 2, 1, 5, 6, 4];
var k = 2;

findKthLargest(nums, k);
