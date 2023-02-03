// https://leetcode.com/problems/contains-duplicate/
// Easy

function containsDuplicate1(nums) {
    // 2nd approach takes more time so avoid using it

    // Instead of using object, map data structure can also be used here
    // let map = {};
    // for (const value of nums) {
    //     if(map[value])
    //         return true;
    //     else
    //         map[value] = 1;
    // }
    // return false;

    // for (const key in nums) {
    //     if (nums.indexOf(nums[key]) != key)
    //         return true;
    // } 
    // return false;

    const s = new Set(nums);
    return (s.size != nums.length);
}

var nums = [1, 2, 3, 1];
var nums = [1, 2, 3, 4];
var nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(nums));