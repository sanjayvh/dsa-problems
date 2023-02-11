// https://www.youtube.com/watch?v=MPJe14plo28
// Refer link above to Solve in TC: O(n) and SC: O(n). Approaches vary based on SC and if array can be modified or not

// https://www.interviewbit.com/problems/repeat-and-missing-number-array/
// I have solved this problem in TC: O(n) and SC: O(n)
// TODO: Optimize the solution to use SC: O(1)
// Medium

module.exports = {
    //param A : array of integers
    //return a array of integers
    repeatedNumber: function (A) {
        let n = A.length;
        let a, b;
        let map = {};

        for (let val of A) {
            if (map[val]) {
                map[val]++;
            } else {
                map[val] = 1;
            }
        }
        
        for (let val = 1; val <= n; val++) {
            if (!map[val]) {
                b = val;
            } else if (map[val] > 1) {
                a = val;
            }
        }

        return [a, b];
    },
};
