// https://leetcode.com/problems/next-permutation/description/ --------> No accepting code
// https://practice.geeksforgeeks.org/problems/next-permutation5226/1 --------> code accepted
// Medium

class Solution {
    reverse(nums, l, r) {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }

    nextPermutation(nums, n) {
        let swapA;

        for (let i = n - 1; i > 0; i--) {
            if (nums[i] > nums[i - 1]) {
                swapA = i - 1;
                break;
            }
        }

        if (swapA === undefined) {
            // permutaiton is in decreasing order
            // so simply reverse the permutation or sort the array
            this.reverse(nums, 0, n - 1);
        } else {
            let swapB;
            let minDiff = Number.MAX_VALUE;
            // Assume my nums[swapA] is 3 find the next greater element than nums[swapA]
            // 5 2 4 6
            for (let i = swapA + 1; i < nums.length; i++) {
                if (nums[i] > nums[swapA]) {
                    if (minDiff > nums[i] - nums[swapA]) {
                        minDiff = nums[i] - nums[swapA];
                        swapB = i;
                    }
                }
            }

            if (swapB === undefined) {
                [nums[n - 1], nums[n - 2]] = [nums[n - 2], nums[n - 1]];
            } else {
                // swap elements to get greater permutation, but we won't know if it is the next greater permutation
                // so sort the elements from( swapA + 1, n - 1) to get the next greater permutation
                // and concatenate them with left part of array
                [nums[swapA], nums[swapB]] = [nums[swapB], nums[swapA]];
                nums = [
                    ...nums.slice(0, swapA + 1),
                    ...nums.slice(swapA + 1).sort((a, b) => a - b),
                ];
            }
        }

        return nums;
    }
}
