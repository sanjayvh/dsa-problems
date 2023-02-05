var search1 = function(nums, target) {
    // Linear approach
    for (const key in nums) {
        if (nums[key] == target)
            return key;
    }

    return -1;
}

var search2 = function(nums, target) {
    // Modified binary search approach
    // Important Note: When you divide the rotated array into two halves, 
    // using mid index, at least one of subarray should remain sorted ALWAYS.
    // If you know one side is sorted, the rest of logic becomes very simple.
    // If one side is sorted, check if the target is in the boundary, otherwise it's on the other side.
    // IF smallest <= target <= biggest
    //      then target is here
    // ELSE
    //      then target is on the other side

    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = l + parseInt((r - l) / 2);

        if (nums[mid] == target)
            return mid;
        else if (nums[l] <= nums[mid]) {
            // left portion is sorted
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            // rigt portion is sorted
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }

    return -1;
};
            
var nums = [4, 5, 6, 7, 0, 1, 2];   // 4
var target = 0;

// var nums = [6, 7, 8, 9, 0, 1, 2, 3, 4, 5];  // 2
// var target = 8;

// var nums = [7, 8, 9, 0, 1, 2, 3, 4, 5]; //3
// var target = 0;

// var nums = [4, 5, 6, 7, 0, 1, 2];   // -1
// var target = 3;

// var nums = [1]; // -1
// var target = 0;

console.log(search1(nums, target));
console.log(search2(nums, target));